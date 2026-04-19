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
