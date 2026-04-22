// quiz.js - 심리테스트 logic

// -- QUESTION --
// style: A = activist, R = reflector, T = theorist, P = pragmatist
// TODO: Replace these 4 placeholder w the full 20 Qs

const questions = [
  {
    id: 1,
    text: "일주일 휴가 중 3일째... 나는:",
    options: [
      {
        text: "이대로는 못 참지! 도파민 충전을 위해 안 해본 운동, 원데이 클래스, 번개 모임까지 풀코스로 달린다.",
        style: "A",
      },
      {
        text: "이게 행복이지. 충분히 쉬었지만 조금 더 빈둥거리고 싶다. 나가더라도 영화관이나 조용한 전시회 정도가 딱이다.",
        style: "R",
      },
      {
        text: "남은 시간 순삭 방지! 남은 5일을 어떻게 알차게 보낼지 시스템을 구축한다. 궁금했던 분야의 책도 좀 파볼까? ",
        style: "T",
      },
      {
        text: "갓생 가보자고. 이직이나 스펙업에 필요한 자격증 서적을 뒤적이며 실전에 필요한 것들을 체크한다.",
        style: "P",
      },
    ],
  },
  {
    id: 2,
    text: "새 소프트웨어 툴을 배워야 할 때: ",
    options: [
      {
        text: "일단 남들이 어떻게 쓰는지 관전한다. 오... 저렇게 하는 거군? 충분히 지켜본 뒤 조심스레 클릭.",
        style: "R",
      },
      {
        text: "이거 당장 어디다 써먹지? 내가 딱 필요한 기능부터 찾아서 바로 업무에 적용해 본다.",
        style: "P",
      },
      {
        text: "튜토리얼은 사치다. 일단 켜고 이것저것 눌러본다. 몸으로 부딪히며 배우는 게 국룰!",
        style: "A",
      },
      {
        text: "공식 문서나 매뉴얼부터 정독한다. 원리와 구조를 모르면 시작할 수 없다.",
        style: "T",
      },
    ],
  },
  {
    id: 3,
    text: "친구들이랑 2박3일 기차여행! 나는:",
    options: [
      {
        text: "최저가+동선+효율 3박자를 맞춘 엑셀 리스트 작성. 낭비 없는 완벽한 여행을 꿈꾼다.",
        style: "P",
      },
      {
        text: "기차표 샀어? 그럼 끝! 가서 발길 닿는 대로 노는 게 진짜 여행이지. 히힣 신난다!",
        style: "A",
      },
      {
        text: "갔다 오면 월요일인데... 피곤할 미래의 나를 걱정하며 최대한 무리 없는 일정을 선호한다.",
        style: "R",
      },
      {
        text: "여행지의 역사와 유래를 찾아본다. 지도로 동선의 논리성을 따져보며 완벽한 계획표를 만든다.",
        style: "T",
      },
    ],
  },
  {
    id: 4,
    text: "새 프로젝트의 첫 회의 시간:",
    options: [
      {
        text: "말 길어지면 노잼. 지금 당장 실행 가능한 아이디어 위주로 짧고 굵게 의견을 낸다.",
        style: "P",
      },
      {
        text: "일단 경청하며 데이터를 쌓는다. 저 말에 허점은 없을까? 고민하다가 막판에 의견을 보탠다.",
        style: "R",
      },
      {
        text: "이 프로젝트의 본질은 뭐지? 전체적인 구조와 인과관계를 분석하며 논리적인 아이디어를 제안한다.",
        style: "T",
      },
      {
        text: "브레인스토밍의 화신. 이런 건 어때요? 저런 건요? 일단 아무 말이나 마구 던지고 본다.",
        style: "A",
      },
    ],
  },
  {
    id: 5,
    text: "직접 조립해야 하는 이케아 책장이 왔다! 나는:",
    options: [
      {
        text: "설명서? 그게 뭐임? 일단 뜯고 본다. 조립하다 부품 남으면 어... 이게 왜 여기 있지?",
        style: "A",
      },
      {
        text: "설명서 첫 장부터 끝장까지 정독. 부품 개수 다 맞는지 확인하고 순서대로 엄격하게 조립한다.",
        style: "T",
      },
      {
        text: "그림 위주로 슥 훑고 - 오케이, 대충 감 왔어. 바로 조립 시작. 막히는 부분만 다시 찾아본다.",
        style: "P",
      },
      {
        text: "이거 우리 집 인테리어랑 진짜 맞나? 한참 고민하다가 남들은 어떻게 배치했는지 후기를 더 찾아본다.",
        style: "R",
      },
    ],
  },
  {
    id: 6,
    text: "시험이 이틀 남았다! 나의 공부법은?:",
    options: [
      {
        text: "시간 실화?ㄷㄷ 오답 노트를 훑으며 내가 뭘 놓쳤는지 차분히 복기한다. 시간이 부족해 초조하다.",
        style: "R",
      },
      {
        text: "벼락치기 가자! 족보 위주로 친구랑 퀴즈 내면서 게임하듯 공부한다.",
        style: "A",
      },
      {
        text: "선택과 집중. 나올 것 같은 핵심 요약본만 달달 외워 점수를 뽑아내는 효율을 택한다.",
        style: "P",
      },
      {
        text: "전체 내용을 마인드맵이나 트리 구조로 정리한다. 개념 간의 연결 고리가 이해되어야 마음이 편하다.",
        style: "T",
      },
    ],
  },
  {
    id: 7,
    text: "스터디 모임에서 의견 충돌이 났을 때 운영진인 나는: ",
    options: [
      {
        text: "자자, 싸우지 말고. 당장 적용 가능한 가장 현실적이고 빠른 합의점을 제시한다.",
        style: "P",
      },
      {
        text: "다들 사정이 있겠지. 양쪽 이야기를 끝까지 다 들어보고 상황을 객관적으로 관찰한다.",
        style: "R",
      },
      {
        text: "제 생각은 이래요! 내 의견을 시원하게 밝히고 화끈한 토론을 제안한다.",
        style: "A",
      },
      {
        text: "왜 이런 갈등이 생겼을까? 문제의 근본 원인을 이성적으로 분석해 시스템적인 해결책을 찾는다.",
        style: "T",
      },
    ],
  },
  {
    id: 8,
    text: "점메추! :",
    options: [
      {
        text: "오늘은 돈까스각! 내가 먹고 싶은 메뉴의 장점을 강력하게 어필하며 분위기를 주도한다.",
        style: "A",
      },
      {
        text: "근처 식당의 별점, 리뷰, 가성비를 논리적으로 비교해 최적의 식당 리스트를 도출한다.",
        style: "T",
      },
      {
        text: "공부해야 하니까 가볍게. 오후 일정에 지장 주지 않는 가장 효율적인 메뉴를 고른다.",
        style: "P",
      },
      {
        text: "다들 뭐 먹고 싶어? 남들의 선택을 다 확인한 뒤, 가장 무난하고 뒷말 안 나올 메뉴를 고른다.",
        style: "R",
      },
    ],
  },
  {
    id: 9,
    text: "친구 생일 선물을 고를 때:",
    options: [
      {
        text: "친구의 라이프스타일을 분석하고 취향의 카테고리를 분류해 가장 의미 있는 선물을 고른다.",
        style: "T",
      },
      {
        text: "필요한 게 장땡. 친구가 예전에 갖고 싶다던 실용적인 물건을 사준다.",
        style: "P",
      },
      {
        text: "다른 친구들이 뭐 샀는지 눈치 보며 기다리다가 겹치지 않는 적절한 타이밍에 선물을 고른다.",
        style: "R",
      },
      {
        text: "이거 요즘 SNS에서 핫해! 아직 안 먹어봤을 법한 힙한 디저트나 신박한 아이템을 고른다.",
        style: "A",
      },
    ],
  },
  {
    id: 10,
    text: "연인과 영화관에 갔을 때: ",
    options: [
      {
        text: "요즘 이게 대세라며? 스몰토크 소재로 쓰기 좋은 흥행 1위 영화를 본다.",
        style: "P",
      },
      {
        text: "영화 내용보다 영화를 보고 나서 나눌 '우리들의 대화'와 '감상 공유'를 더 중요하게 생각한다.",
        style: "R",
      },
      {
        text: "마블 신작? 바로 예매! 화려한 볼거리와 자극이 있는 대작을 선호한다.",
        style: "A",
      },
      {
        text: "작품성 높은 예술 영화를 보며, 감독의 의도나 세계관을 분석하는 재미를 즐긴다.",
        style: "T",
      },
    ],
  },
  {
    id: 11,
    text: "산책하는 도중 앞에 걸어가던 사람이 갑자기 쓰러진다. 나는: ",
    options: [
      {
        text: "차분하게 심폐소생술을 배운 순서대로 실행한다. 의식확인, 도움요청, 가슴 압박 그리고 AED 사용까지.",
        style: "T",
      },
      {
        text: "일단 달려가서 흔들어 깨우려고 한다. 일어나지 않으면 주변에 지나가는 사람들을 붙잡으며 응급요청을 한다.",
        style: "A",
      },
      { text: "119에 신고해 응급대원이 시키는 지시를 따른다.", style: "P" },
      {
        text: "일단 멈춰서 상황을 파악한다. 의식이 있는지 확인하고, 119에 신고한 뒤 응급대원과 통화하며 지시를 기다린다. 햇볕이 뜨거우니 그늘로 옮기고, 뇌전증이나 지병이 있는지 주머니를 살펴본다.",
        style: "R",
      },
    ],
  },
  {
    id: 12,
    text: "내 직속 상사가 나에게 새로운 업무를 주어줬다. 내가 여태까지 해보지 않은 일이고 내가 할 수 있는 일인지 아직 잘 모르겠다. 나는: ",
    options: [
      {
        text: "패닉한다. 모르는 걸 어떻게 하라는거지? 일단 일은 해야 하니까 최대한 많은 데이터를 모아본다.",
        style: "R",
      },
      {
        text: "내가 이 업무를 실행하기 어려울 것이라 상사에게 먼저 얘기해본다. 그래서 내가 할 수 있는 현실적인 타협점을 찾아본다.",
        style: "P",
      },
      {
        text: "일단 해본다. 잘 모르겠지만 그래도 상사가 날 그만큼 신뢰한다는 거겠지? 긍정적으로 생각해본다.",
        style: "A",
      },
      {
        text: "이 업무가 정확히 무엇인지부터 파악한다. 어떤 개념과 원리가 필요한지, 어디서부터 시작해야 하는지 구조를 먼저 그려본다. 공부가 필요하다면 기꺼이 한다.",
        style: "T",
      },
    ],
  },
  {
    id: 13,
    text: "화창한 봄 날씨, 데이트를 하는 날이다. 기분도 너무 좋고 계획했던대로 실행하기만 되는데 하나씩 틀어지기 시작한다. 나는: ",
    options: [
      {
        text: "최대한 효율적으로 동선을 다시 짜본다. 웨이팅 긴 맛집이나 시간을 빠듯하게 맞춰야 하는 영화보단 연인과 함께 편안한 시간을 보내는게 더 우선순위다.",
        style: "P",
      },
      {
        text: "일단 뭐가 왜 틀어진 건지부터 파악한다. 예약을 안 한 건지, 시간 계산을 잘못한 건지. 이유를 알아야 다음 선택을 할 수 있다. 남은 일정과 이동 시간을 머릿속으로 정리해보고, 지금 상황에서 가장 논리적인 선택지를 연인에게 설명하며 제안한다.",
        style: "T",
      },
      {
        text: "발 닿는데로 간다. 계획이 조금 틀어진다고 즐거운 데이트를 못 할 이유는 없다!",
        style: "A",
      },
      {
        text: "계획대로 하지 못해서 조금 서운하다. 하지만 새로 계획을 세우기엔 힘들 것 같고, 연인과 여러 대화를 나눠보면서 할 수 있는 대안을 찾아본다.",
        style: "R",
      },
    ],
  },
  {
    id: 14,
    text: "친구들과 대화 도중 내 전문분야에 관련한 이야기가 오고갔다. 친구중 한 명이 전혀 맞지 않은 이론을 맞다고 주장을 한다. 나는:",
    options: [
      {
        text: " 저 친구가 왜 저런 주장을 하는지 생각을 해본다. 정말 저 말을 굳게 믿는 것일까? 이 친구를 보는 시각도 조금 달라진다.",
        style: "R",
      },
      {
        text: "이 대화가 이어진다면 감정싸움으로 이어질 수 있다고 생각하여 대화 주제를 바꿔본다. 더 얘기해봤자 시간낭비니까.",
        style: "P",
      },
      {
        text: "그 주장의 허점이랑 앞뒤 안 맞는 걸 생각해본다. 그리고 그 점을 친구에게 말해준다.",
        style: "T",
      },
      { text: "놀린다. 뭐라는 거야 이 멍충이가.", style: "A" },
    ],
  },
  {
    id: 15,
    text: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { text: "완벽하지 않아도 빨리 시작해서  나간다", style: "A" },
      { text: "비슷한 사례를 먼저 충분히 조사한다", style: "R" },
      { text: "구조와 원칙을 먼저 설계한다", style: "T" },
      { text: "실용적인 로드맵을 세우고 단계별로 진행한다", style: "P" },
    ],
  },
  {
    id: 16,
    text: "화장실에 들어갔는데 변비인가...아무리 기다려도 소식이 없다. 인터넷에 찾아보니 검지를 벽에 갖다 대서 꾹 눌러보라는데 나는:",
    options: [
      {
        text: "이 신박한 헛소리가 재밌기도 하지만 어떤 사유로 이런 방식을 알아내게 되었는지 궁금해진다.",
        style: "R",
      },
      {
        text: "다른 사람들의 성공 케이스가 있는지도 찾아본다. 해보긴 해도 그게 실제로 가능한지가 중요함.",
        style: "P",
      },
      {
        text: "일단 해봄. 성공하면 이 방법을 다른 사람들한테 추천해준다.",
        style: "C",
      },
      {
        text: "도데체 이 사람이 어떤 지식적 바탕으로 이런 헛소리를 하는 것인지 고민해본다. 오늘은 물을 좀 많이 마셔야겠다.",
        style: "T",
      },
    ],
  },
  {
    id: 17,
    text: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { text: "완벽하지 않아도 빨리 시작해서  나간다", style: "A" },
      { text: "비슷한 사례를 먼저 충분히 조사한다", style: "R" },
      { text: "구조와 원칙을 먼저 설계한다", style: "T" },
      { text: "실용적인 로드맵을 세우고 단계별로 진행한다", style: "P" },
    ],
  },
  /*  
  {
    id: 3,
    text: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { text: "완벽하지 않아도 빨리 시작해서  나간다", style: "A" },
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
