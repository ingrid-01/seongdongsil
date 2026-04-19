// quiz.js - 심리테스트 logic

// -- QUESTION --
// style: A = activist, R = reflector, T = theorist, P = pragmatist
// TODO: Replace these 4 placeholder w the full 20 Qs

const questions = [
  {
    id: 1,
    text: "일주일 휴가를 받고 뒹굴거리기 3일째, 나는:",
    options: [
      {
        text: "갈망한다. 새로운 거 새로운 거 새로운 거! 해보고 싶던 운동이나 취미 하루 코스 도전, 안 가본 맛집도 찾아가보고, 아니면 새로운 모임에서 새로운 사람 만나는 것도 너무 재밌겠다!",
        style: "A",
      },
      {
        text: "충분한 휴식을 취했는가? 조금 부족할지도... 일주일은 금방 흘러가니 집에서 조금 더 쉬어야겠다. 아니면 보고 싶었던 영화나 전시회 하나 정도는 보고 올까 생각 중.",
        style: "R",
      },
      {
        text: "남은 5일 동안 어떻게 보낼지 계획을 한 번 세워본다. 평소에 읽고 싶었던 책이나 궁금했던 주제를 파고드는 것도 좋겠다. 이왕이면 알차게 보내는 게 좋지!",
        style: "T",
      },
      {
        text: "이직 준비도 해야 하니까 필요한 자격증 공부를 해야지. 서점에도 한 번 들러 전문서적도 둘러봐야겠다.",
        style: "P",
      },
    ],
  },
  {
    id: 2,
    text: "새로운 소프트웨어 도구를 배워야 한다. 나는 제일 먼저:",
    options: [
      {
        text: "다른 사람은 어떻게 사용하는지 먼저 지켜본다. 일단 구경꾼 모드. 해 볼 만하면 하나씩 시도를 해본다.",
        style: "R",
      },
      {
        text: "충목표를 정하고 그에 맞는 기능부터 배운다. 굳이 사용 안 하는 기능까지 알 필욘 없지.",
        style: "P",
      },
      {
        text: "일단 열어보고 이것저것 눌러본다. 이런 거 하면서 배우는 거지!",
        style: "A",
      },
      {
        text: "공식 문서/매뉴얼을 먼저 읽어보고, 유튜브 영상이나 블로그, 커뮤니티에서 사용법을 찾아본다.",
        style: "T",
      },
    ],
  },
  {
    id: 3,
    text: "친구들이랑 2박3일동안 기차여행을 가기로 했다. 나는:",
    options: [
      {
        text: "꿀팁 찾아서 기차표 저렴하게 끊고, 접근성 좋은 숙소 잡고, 꼭 가보고 싶은 곳 몇 군데만 추려놓은 리스트 하나 작성! 효율적으로 다녀오는 거지",
        style: "P",
      },
      {
        text: "기차표만 끊으면 준비 완. 가서 어떻게든 되겠지! 히힣 너무 재밌겠다~",
        style: "A",
      },
      {
        text: "재밌긴 할 텐데 조금 귀찮다. 계획하기도 귀찮고 또 갔다 오면 피곤한 상태에서 출근해야할텐데...그래도 간김에 저번에 먹고 싶던 ㅇㅇ을 먹어볼 순 있겠군.",
        style: "R",
      },
      {
        text: "여행지에 대한 역사나 지역 특색을 먼저 찾아봐야지. 동선도 지리적으로 효율적인지 지도 보면서 논리적으로 짜보고, 일정표를 만들어두면 나중에 후회 없을 것 같아.",
        style: "T",
      },
    ],
  },
  {
    id: 4,
    text: "새 프로젝트가 시작된다. 첫 회의에서 난:",
    options: [
      {
        text: "회의는 길어질수록 효율성이 떨어져. 지금 당장 할 수 있는 게 뭔지부터 파악하고 그걸 토대로 최소한의 아이디어만 낸다.",
        style: "P",
      },
      {
        text: "이 프로젝트에 관련된 기본 정보와 협업하는 업체의 배경 등 일단 데이터를 쌓는 시간을 먼저 가져야 할 것 같아. 다른 사람들이 내는 아이디어를 따르는 걸로, 추후에 문제점이 발견되면 그때 의견을 내야겠다.",
        style: "R",
      },
      {
        text: "이 프로젝트의 핵심은 ㅇㅇ이야. 프로젝트를 성공한다면 우리 회사의 입지가 더 단단해지고 내 커리어를 쌓는 데에도 큰 도움이 되겠지. 이 프로젝트가 우리 팀에게 왜 지금 필요한지 분석해보고, 성공하기 위해 뭘 해야 하는지 아이디어를 내봐야겠어.",
        style: "T",
      },
      {
        text: "생각나는 대로 아이디어를 낸다. 원래 브레인스토밍은 마구잡이로 던져야 획기적인 게 나오기도 하는 법이니까!",
        style: "A",
      },
    ],
  },
  {
    id: 5,
    text: "최근에 주문한 조립용 책장이 도착했다. 나는:",
    options: [
      {
        text: "신나게 포장지를 뜯어 매뉴얼은 던져놓고 조립을 시작한다! 하지만 얼마 안 가 필요한 부품을 다 써버리고... 뭐가 잘못된 거지? 에잇, 친구한테 부탁해봐야겠다 ㅠㅠ",
        style: "A",
      },
      {
        text: "매뉴얼부터 정독한다. 필요한 부품과 도구들을 옆에 정리해두고 순서대로 조립하기 시작한다.",
        style: "T",
      },
      {
        text: "매뉴얼을 훑어보고 핵심 단계만 파악한 다음, 바로 조립에 들어간다. 어차피 직접 해봐야 아는 거니까 — 막히면 그때 다시 보면 되지.",
        style: "P",
      },
      {
        text: "책장이 우리 집과 잘 어울리는지 한참 고민해본다. 온라인에서 봤던 거랑은 조금 다른 것 같기도 하고... 다 조립했는데 반품할 수 있으려나? 그래도 벽지랑은 잘 어울리는 것 같기도..",
        style: "R",
      },
    ],
  },
  /*  
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
  }, */
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
  ALL: {
    name: "올라운더 (All-Rounder)",
    tagline:
      "특정 유형에 치우치지 않고 상황에 따라 유연하게 학습하는 사람입니다!",
    strengths:
      "어떤 학습 환경에서도 적응할 수 있는 유연성을 갖추고 있습니다. 행동, 성찰, 이론, 실용 - 네 가지 방식을 모두 고루 활용할 수 있다는 것은 큰 강점입니다.",
    weaknesses:
      "특정 유형에 집중하지 않다 보니, 상황에 따라 어떤 방식을 선택해야 할지 고민이 될 수 있습니다. 때로는 네 가지 방식을 모두 활용하려다 보니, 결정이 늦어지거나 에너지가 분산될 수 있습니다.",
    growth:
      "자신의 네 가지 학습 유형을 모두 인식하고 상황에 맞게 의도적으로 활용하는 연습을 해보세요. 예를 들어, 새로운 주제를 배울 때는 먼저 행동형으로 빠르게 시작해보고 그 후에는 성찰형으로 돌아보며 이론형으로 원리를 이해하고 실용형으로 적용해보는 식입니다. 이렇게 네 가지 방식을 순환적으로 활용하면 올라운더로서의 강점을 극대화할 수 있습니다.",
  },
};

// -- STATE --
let currentQ = 0;
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
  document.getElementById("progress-bar").style.width = `${pct}%`;

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

  if (topStyles.length === 4) {
    const r = results.ALL;
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
  } else if (topStyles.length === 1) {
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
    // multiple dominant styles
    const names = topStyles
      .map(function (s) {
        return results[s].name;
      })
      .join(" + ");
    document.getElementById("result-type").textContent = names;
    document.getElementById("result-tagline").textContent =
      "당신은 여러 학습 유형이 특성을 가지고 있습니다!";
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

// -- Event Listeners --
document.getElementById("btn-start").addEventListener("click", function () {
  showScreen("screen-quiz");
  renderQuestion();
});

document.getElementById("btn-retry").addEventListener("click", function () {
  currentQ = 0;
  scores.A = 0;
  scores.R = 0;
  scores.T = 0;
  scores.P = 0;
  document.getElementById("progress-bar").style.width = "0%";
  showScreen("screen-intro");
});
