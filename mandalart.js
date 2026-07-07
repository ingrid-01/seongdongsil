/* ---------------- Data model ---------------- */
const STORAGE_KEY = "sds_mandalart_v1";
const POS = [0, 1, 2, 3, 5, 6, 7, 8];

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    core: "",
    subgoals: Array(8).fill(""),
    actions: Array.from({ length: 8 }, () => Array(8).fill("")),
  };
}
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
let data = loadData();

const LANG = {
  en: {
    title: "MANDALART PLANNER",
    subtitle: "personal goal map",
    hint: "Fill in your core goal and 8 sub-goals directly · tap an outer block to zoom in and add actions",
    core_ph: "core goal",
    sub_ph: "sub-goal",
    reset: "Reset",
    reset_confirm: "Tap again to clear",
    save: "Save as PNG",
    cleared: "All cells cleared",
    save_note:
      "PNG export will be wired up in the build phase — this mockup is for visual design only.",
    note_l1: "Saved automatically to your browser as you type.",
    note_l2:
      "Account-based library & sharing with other SDS members are planned for a later phase, once login is built.",
  },
  kr: {
    title: "만다라트 계획표",
    subtitle: "나만의 목표 지도",
    hint: "핵심 목표와 8개의 세부 목표를 바로 입력하세요 · 바깥 블록을 탭하면 확대되어 실천 항목을 추가할 수 있어요",
    core_ph: "핵심 목표",
    sub_ph: "세부 목표",
    reset: "초기화",
    reset_confirm: "다시 탭하면 초기화",
    save: "PNG로 저장",
    cleared: "모든 칸이 초기화되었습니다",
    save_note:
      "PNG 저장 기능은 실제 개발 단계에서 연결될 예정입니다 — 이 목업은 디자인 확인용입니다.",
    note_l1: "입력하는 동안 브라우저에 자동 저장됩니다.",
    note_l2:
      "로그인 기능이 만들어지면 계정별 보관함과 다른 SDS 멤버와의 공유 기능이 추가될 예정입니다.",
  },
};
let currentLang = "en";

/* ---------------- Toast ---------------- */
const toastEl = document.getElementById("toast");
let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
}

/* ---------------- Hand-drawn wobble line generator ---------------- */
function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
function wobblyLine(x1, y1, x2, y2, seed, amp = 1.4) {
  const rnd = seededRandom(seed);
  const dx = x2 - x1,
    dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len,
    ny = dx / len;
  // o1 is a free random offset for the first control point (t≈0.33).
  // o2 is deliberately anti-correlated with o1 (opposite-ish sign, damped
  // magnitude) rather than fully independent. Two independent offsets can
  // land on the same side by chance, which makes the whole line bow
  // consistently to one side of the true (straight) path — visually read
  // as "the line is over here" rather than as ink texture. Forcing a
  // gentle S-curve keeps the hand-drawn wobble while making sure it
  // straddles the true line instead of drifting off of it.
  const o1 = (rnd() - 0.5) * 2 * amp;
  const o2 = -o1 * (0.35 + rnd() * 0.4) + (rnd() - 0.5) * amp * 0.5;
  const c1x = x1 + dx * 0.33 + nx * o1,
    c1y = y1 + dy * 0.33 + ny * o1;
  const c2x = x1 + dx * 0.66 + nx * o2,
    c2y = y1 + dy * 0.66 + ny * o2;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}
function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h) + 1;
}
function buildGridSVG(blockKey, isZoom) {
  // Wobble amplitude is defined in viewBox units (0-100), so the same amplitude
  // reads as subtle ink texture on a small ~130px grid block but as visible
  // bowing once the same block is rendered ~3x larger in the zoom panel.
  // Scale amplitude down further for the zoom context (on top of the
  // anti-correlated S-curve fix above) so the inner dividers — the ones
  // that sit right between two columns of editable cells — read as texture
  // rather than as "here's where the boundary really is".
  const borderAmp = isZoom ? 0.25 : 0.9;
  const innerAmp = isZoom ? 0.35 : 1.6;
  const inner = [33.34, 66.67];
  const lines = [];
  const borderSpecs = [
    [0, 0, 100, 0],
    [100, 0, 100, 100],
    [100, 100, 0, 100],
    [0, 100, 0, 0],
  ];
  borderSpecs.forEach((s, i) => {
    const seed = hashSeed(blockKey + "border" + i);
    const d = wobblyLine(s[0], s[1], s[2], s[3], seed, borderAmp);
    lines.push(
      `<path d="${d}" fill="none" stroke="#5B4030" stroke-width="2" stroke-linecap="round" opacity="1"/>`,
    );
  });
  inner.forEach((x, i) => {
    const seed = hashSeed(blockKey + "iv" + i);
    const d = wobblyLine(x, 0, x, 100, seed, innerAmp);
    lines.push(
      `<path d="${d}" fill="none" stroke="#5B4030" stroke-width="1" stroke-linecap="round" opacity="0.55"/>`,
    );
  });
  inner.forEach((y, i) => {
    const seed = hashSeed(blockKey + "ih" + i);
    const d = wobblyLine(0, y, 100, y, seed, innerAmp);
    lines.push(
      `<path d="${d}" fill="none" stroke="#5B4030" stroke-width="1" stroke-linecap="round" opacity="0.55"/>`,
    );
  });
  return `<svg class="grid-lines" viewBox="0 0 100 100" preserveAspectRatio="none">${lines.join("")}</svg>`;
}
function drawRule(el, seed) {
  const d = wobblyLine(4, 3, 216, 3, seed, 0.8);
  el.innerHTML = `<path d="${d}" stroke="#5B4030" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}
drawRule(document.getElementById("rule-top"), 101);
drawRule(document.getElementById("rule-bottom"), 202);

/* ---------------- Rendering ---------------- */
const superGridEl = document.getElementById("superGrid");
const zoomPanel = document.getElementById("zoomPanel");
const backdrop = document.getElementById("backdrop");
let activeBlock = null;

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const GRID_XS = [0, 33.34, 66.67, 100];
function cellStyle(pos) {
  const row = Math.floor(pos / 3),
    col = pos % 3;
  const left = GRID_XS[col],
    top = GRID_XS[row];
  const width = GRID_XS[col + 1] - GRID_XS[col],
    height = GRID_XS[row + 1] - GRID_XS[row];
  return `left:${left}%; top:${top}%; width:${width}%; height:${height}%;`;
}
function cellInput(kind, pos, value, placeholder) {
  const html = value ? escapeHtml(value).replace(/\n/g, "<br>") : "";
  return `<div class="cell ${kind}" style="${cellStyle(pos)}"><div class="cell-input" contenteditable="true" data-pos="${pos}" data-placeholder="${placeholder || ""}">${html}</div></div>`;
}
function cellLinked(pos, value, placeholder) {
  const empty = !value;
  return `<div class="cell linked-cell" style="${cellStyle(pos)}" data-pos="${pos}"><div class="linked-label ${empty ? "empty" : ""}">${empty ? placeholder : escapeHtml(value)}</div></div>`;
}

function cellsForBlock(blockPos) {
  const t = LANG[currentLang];
  let html = "";
  if (blockPos === 4) {
    for (let i = 0; i < 9; i++) {
      if (i === 4) html += cellInput("core-cell", i, data.core, t.core_ph);
      else
        html += cellInput(
          "center-cell",
          i,
          data.subgoals[POS.indexOf(i)],
          t.sub_ph,
        );
    }
  } else {
    const idx = POS.indexOf(blockPos);
    for (let i = 0; i < 9; i++) {
      if (i === 4) html += cellLinked(i, data.subgoals[idx], t.sub_ph);
      else
        html += cellInput(
          "action-cell",
          i,
          data.actions[idx][POS.indexOf(i)],
          "",
        );
    }
  }
  return html;
}

function renderBlock(blockPos) {
  const zoomable = blockPos !== 4;
  return `<div class="block ${blockPos === 4 ? "center-block" : ""} ${zoomable ? "zoomable" : ""}" data-blockpos="${blockPos}">
      ${buildGridSVG("block" + blockPos)}
      <div class="cell-layer">${cellsForBlock(blockPos)}</div>
    </div>`;
}

function renderSuperGrid() {
  let html = "";
  for (let i = 0; i < 9; i++) html += renderBlock(i);
  superGridEl.innerHTML = html;
  attachInputHandlers(superGridEl, null);
  superGridEl.querySelectorAll(".block.zoomable").forEach((b) => {
    b.addEventListener("click", () => openZoom(parseInt(b.dataset.blockpos)));
  });
}

function attachInputHandlers(root, blockPos) {
  root.querySelectorAll(".cell-input[contenteditable]").forEach((el) => {
    el.addEventListener("click", (e) => e.stopPropagation());
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        document.execCommand("insertLineBreak");
      }
    });
    el.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData("text");
      document.execCommand("insertText", false, text);
    });
    el.addEventListener("blur", () => {
      const bp =
        blockPos === null
          ? parseInt(el.closest(".block").dataset.blockpos)
          : blockPos;
      const pos = parseInt(el.dataset.pos);
      applyValue(bp, pos, el.innerText.trim());
      saveData();
      if (activeBlock !== null) refreshZoomContent();
      renderSuperGrid();
    });
  });
}

function applyValue(blockPos, pos, val) {
  if (blockPos === 4) {
    if (pos === 4) data.core = val;
    else data.subgoals[POS.indexOf(pos)] = val;
  } else {
    if (pos !== 4) {
      const idx = POS.indexOf(blockPos);
      data.actions[idx][POS.indexOf(pos)] = val;
    }
  }
}

/* ---------------- Zoom interaction (outer blocks only) ---------------- */
function openZoom(blockPos) {
  if (blockPos === 4) return;
  activeBlock = blockPos;
  superGridEl.classList.add("dimmed");
  superGridEl
    .querySelector(`.block[data-blockpos="${blockPos}"]`)
    .classList.add("active");
  refreshZoomContent();
  zoomPanel.style.transform = "";
  backdrop.classList.add("show");
  zoomPanel.classList.add("show");
}
function onZoomTransitionEnd(e) {
  if (e.propertyName === "transform" && zoomPanel.classList.contains("show")) {
    zoomPanel.style.transform = "translate(-50%,-50%)";
  }
}
zoomPanel.addEventListener("transitionend", onZoomTransitionEnd);
function refreshZoomContent() {
  zoomPanel.innerHTML = `${buildGridSVG("zoom" + activeBlock, true)}<div class="cell-layer">${cellsForBlock(activeBlock)}</div>`;
  attachInputHandlers(zoomPanel, activeBlock);
}
function closeZoom() {
  if (activeBlock === null) return;
  superGridEl.classList.remove("dimmed");
  const activeEl = superGridEl.querySelector(".block.active");
  if (activeEl) activeEl.classList.remove("active");
  zoomPanel.style.transform = "";
  backdrop.classList.remove("show");
  zoomPanel.classList.remove("show");
  activeBlock = null;
  renderSuperGrid();
}
backdrop.addEventListener("click", closeZoom);

/* ---------------- Language toggle ---------------- */
function applyLang() {
  const t = LANG[currentLang];
  document.getElementById("main-title").textContent = t.title;
  document
    .getElementById("main-title")
    .classList.toggle("kr", currentLang === "kr");
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("hint-text").textContent = t.hint;
  document.getElementById("btn-reset").textContent = t.reset;
  document.getElementById("btn-save").textContent = t.save;
  document.getElementById("note-text").innerHTML =
    `${t.note_l1}<br>${t.note_l2}`;
  document
    .getElementById("btn-en")
    .classList.toggle("active", currentLang === "en");
  document
    .getElementById("btn-kr")
    .classList.toggle("active", currentLang === "kr");
  renderSuperGrid();
  if (activeBlock !== null) refreshZoomContent();
}
document.getElementById("btn-en").addEventListener("click", () => {
  currentLang = "en";
  applyLang();
});
document.getElementById("btn-kr").addEventListener("click", () => {
  currentLang = "kr";
  applyLang();
});

/* ---------------- Footer actions ---------------- */
let resetArmed = false;
let resetTimer = null;
const resetBtn = document.getElementById("btn-reset");
resetBtn.addEventListener("click", () => {
  const t = LANG[currentLang];
  if (!resetArmed) {
    resetArmed = true;
    resetBtn.textContent = t.reset_confirm;
    resetBtn.classList.add("danger-armed");
    resetTimer = setTimeout(() => {
      resetArmed = false;
      resetBtn.textContent = t.reset;
      resetBtn.classList.remove("danger-armed");
    }, 2600);
  } else {
    clearTimeout(resetTimer);
    data = {
      core: "",
      subgoals: Array(8).fill(""),
      actions: Array.from({ length: 8 }, () => Array(8).fill("")),
    };
    saveData();
    closeZoom();
    renderSuperGrid();
    resetArmed = false;
    resetBtn.textContent = t.reset;
    resetBtn.classList.remove("danger-armed");
    showToast(t.cleared);
  }
});
document.getElementById("btn-save").addEventListener("click", () => {
  showToast(LANG[currentLang].save_note);
});

/* ---------------- Init ---------------- */
applyLang();
