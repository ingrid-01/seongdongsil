// quiz.js - 심리테스트 logic

// -- QUESTION --
// style: A = activist, R = reflector, T = theorist, P = pragmatist
// TODO: Replace these 4 placeholder w the full 20 Qs

const questions = [
  {
    id: 1,
    text: "새로운 소프트웨어 도구를 배워야 한다. 나는 어떻게 시작하는가?",
    options: [
      { text: "일단 열어보고 이것저것 눌러본다", style: "A" },
      { text: "다른 사람이 사용하는 것을 먼저 지켜본다", style: "R" },
      { text: "공식 문서와 이론적 배경부터 읽는다", style: "T" },
      { text: "목표를 정하고 그에 맞는 기능부터 배운다", style: "P" },
    ],
  },
  {
    id: 2,
    text: "스터디 모임에서 의견 충돌이 생겼다. 나는 보통 어떻게 행동하는가?",
    options: [
      { text: "바로 내 생각을 말하고 토론을 이끈다", style: "A" },
      { text: "여러 의견을 들으면서 상황을 파악한다", style: "R" },
      { text: "논리적 근거를 찾아 분석한다", style: "T" },
      { text: "가장 현실적인 해결책을 제안한다", style: "P" },
    ],
  },
  {
    id: 3,
    text: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { text: "완벽하지 않아도 빨리 시작해서 수정해 나간다", style: "A" },
      { text: "비슷한 사례를 먼저 충분히 조사한다", style: "R" },
      { text: "구조와 원칙을 먼저 설계한다", style: "T" },
      { text: "실용적인 로드맵을 세우고 단계별로 진행한다", style: "P" },
    ],
  },
  {
    id: 4,
    text: "어떤 방식으로 공부할 때 가장 잘 이해된다고 느끼는가?",
    options: [
      { text: "직접 만들어보고 실험하면서 배울 때", style: "A" },
      { text: "강의 후 충분히 생각할 시간이 있을 때", style: "R" },
      { text: "개념과 원리를 체계적으로 배울 때", style: "T" },
      { text: "배운 것을 바로 실제 문제에 적용할 수 있을 때", style: "P" },
    ],
  },
];

// -- RESULT PROFILES --
// TODO: Replace these 4 placeholder w the full 4 profiles

const results = {
  A: {
    name: "행동형 (Activist)",
    tagline: "먼저 해보고, 나중에 생각한다. 경험이 곧 학습이다.",
    strengths:
      "새로운 것에 빠르게 뛰어들고, 변화를 즐기며, 팀에 에너지를 불어넣는다.",
    weaknesses:
      "충분한 준비 없이 시작하거나, 결과를 너무 빨리 마무리하려 할 수 있다.",
    growth:
      "의도적으로 멈추고 돌아보는 시간을 만들어 보세요. 실험 후 짧게라도 기록하거나, 성찰형 (Reflector) 유형의 친구와 함께 배우면 큰 도움이 됩니다.",
  },
  R: {
    name: "성찰형 (Reflector)",
    tagline: "모든 각도에서 관찰하고, 충분히 생각한 후에 움직인다.",
    strengths:
      "신중하고 깊이 있는 사고, 다양한 관점을 통합하는 능력, 뛰어난 경청 능력.",
    weaknesses:
      "결정을 내리기까지 시간이 오래 걸리거나, 지나치게 분석할 수 있다.",
    growth:
      "작은 것부터 먼저 행동해 보는 연습을 해보세요. 완벽한 준비보다 일단 시작하는 것이 중요합니다. 행동형 (Activist) 유형의 친구와 함께 배우면 큰 도움이 됩니다.",
  },
  T: {
    name: "이론형 (Theorist)",
    tagline:
      "원리를 이해해야 진정으로 안다. 체계적이고 논리적인 접근을 선호한다.",
    strengths:
      "복잡한 개념을 체계적으로 이해하고, 논리적 일관성을 추구하며, 깊은 지식을 쌓는다.",
    weaknesses:
      "이론에 집중한 나머지 실용적 적용이 늦어지거나, 직관적 판단을 어려워할 수 있다.",
    growth:
      "이론 학습 후에는 반드시 작은 실습을 붙여 보세요. 왜를 알았다면 이제 어떻게를 직접 해볼 차례입니다.실용형 (Pragmatist) 유형의 친구와 함께 배우면 큰 도움이 됩니다.",
  },
  P: {
    name: "실용형 (Pragmatist)",
    tagline: "현실적인 해결책을 찾고, 효과적인 방법을 모색한다.",
    strengths:
      "실용적이고 효과적인 해결책을 제안하며, 리더십과 실행력을 갖춘다. 문제 해결 지향적이고 배운 것을 빠르게 적용하며, 현실적인 계획을 잘 세운다.",
    weaknesses:
      "즉각적인 적용이 어려운 이론적 학습에 흥미를 잃거나, 큰 그림을 놓칠 수 있다.",
    growth:
      "때로는 당장 써먹지 못해도 배울 가치가 있는 것들이 있습니다. 호기심 자체를 목적으로 삼는 탐구 시간을 만들어 보세요. 이론형 (Theorist) 유형의 친구와 함께 배우면 큰 도움이 됩니다.",
  },
};

// -- STATE --
let curentQ = 0;
const scores = { A: 0, R: 0, T: 0, P: 0 };

// -- SCREEN SWITCHING --
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// -- RENDER QUESTION --
function renderQuestion() {
  const q = questions[currentQ];
  const total = questions.length;

  //PROGRESS BAR
  const pct = (currentQ / total) * 100;
  document.getElementById("progress-bar").style.width = `${pct} %`;

  // QUESTION NUMBER + TEXT
  document.getElementById("question-meta").textContent =
    `질문 ${currentQ + 1} / ${total}`;
  document.getElementById("question-text").textContent = q.text;

  // ANSWER OPTIONS - built from data, not hardcoded HTML
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  q.options.forEach(function (opt) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", function () {
      handleAnswer(opt.style);
    });
    optionsEl.appendChild(btn);
  });
}

// -- Handle Answer --
function handleAnswer(style) {
  scores[style]++; // add 1 to that style's tally
  currentQ++; // move to next question

  if (currentQ < questions.length) {
    renderQuestion(); // show next question
  } else {
    showResult();
  }
}

// -- Calculate + show Result --
function showResult() {
  // Find the max score
  const maxScore = Math.max(scores.A, scores.R, scores.T, scores.P);

  // Find all styles tied at the top (handles 1 or 2 dominant styles)
  const topStyles = Object.keys(scores).filter(function (s) {
    return scores[s] === maxScore;
  });

  if (topStyles.length === 1) {
    // Single dominant style
    const r = results[topStyles[0]];
    document.getElementById("result-type").textContent = r.name;
    document.getElementById("result-tagline").textContent = r.tagline;
    document.getElementById("result-body").innerHTML =
      "<strong>강점:</strong> " +
      r.strengths +
      "<br><br>" +
      "<strong>약점:</strong> " +
      r.weaknesses +
      "<br><br>" +
      "<strong>올라운더가 되기 위한 팁:</strong> " +
      r.growth +
      "<br><br>";
  } else {
    // Two dominant styles - show both
    const names = topStyles
      .map(function (s) {
        return results[s].name;
      })
      .join(" + ");
    document.getElementById("result-type").textContent = names;
    document.getElementById("result-tagline").textContent =
      "두 가지 학습 유형이 특성을 가지고 있습니다!";
    document.getElementById("result-body").innerHTML = topStyles
      .map(function (s) {
        return (
          "<strong>" +
          results[s].name +
          ":</strong><br>" +
          "<strong>강점:</strong> " +
          results[s].strengths +
          "<br><br>" +
          "<strong>약점:</strong> " +
          results[s].weaknesses +
          "<br><br>" +
          "<strong>올라운더가 되기 위한 팁:</strong> " +
          results[s].growth +
          "<br><br>"
        );
      })
      .join("");
  }

  // Progress bar to 100%
  document.getElementById("progress-bar").style.width = "100%";

  showScreen("screen-result");
}
