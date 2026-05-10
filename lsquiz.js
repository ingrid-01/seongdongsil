// quiz.js - 심리테스트 logic

// -- QUESTIONS --
// style: A = activist, R = reflector, T = theorist, P = pragmatist

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
        text: "남은 시간 순삭 방지! 남은 5일을 어떻게 알차게 보낼지 계획을 세워본다. 궁금했던 분야의 책도 좀 파볼까?",
        style: "T",
      },
      {
        text: "갓생러의 길을 가야만... 이직이나 스펙업에 필요한 자격증 서적을 뒤적이며 실전에 필요한 것들을 체크한다.",
        style: "P",
      },
    ],
  },
  {
    id: 2,
    text: "새 소프트웨어 툴을 배워야 할 때:",
    options: [
      {
        text: "일단 남들이 어떻게 쓰는지 관전한다. 오... 저렇게 하는 거군? 충분히 지켜본 뒤 조심스레 도전.",
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
        text: "일단 사람들 후기 많은 코스로 간다. 검증된 게 편하다.",
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
        text: "여행 테마와 지역 특성을 기준으로 일정을 체계적으로 분류한다.",
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
    text: "시험이 이틀 남았다! 나의 공부법은?",
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
        text: "선택과 집중. 나올 것 같은 핵심 요약본만 외우는 효율적인 선택을 한다.",
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
    text: "스터디 모임에서 의견 충돌이 났을 때 운영진인 나는:",
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
    text: "다 같이 점심 먹으러 가는 상황. 메뉴 정할 때 내 모습은?",
    options: [
      {
        text: "새로 생긴 곳 가보자고 한다. 실해도 재밌으면 됨.",
        style: "A",
      },
      {
        text: "인원수, 이동 동선, 식사 시간까지 고려해 가장 괜찮은 선택지를 정리한다",
        style: "T",
      },
      {
        text: "오후 공부에 방해  안 되는 메뉴로 빠르게 정한다. 맛도 중요하지만 컨디션이 우선.",
        style: "P",
      },
      {
        text: "다들 뭐 먹고 싶어? 다른 의견을 먼저 들어본 뒤, 모두가 무난하게 만족할 메뉴를 고른다.",
        style: "R",
      },
    ],
  },
  {
    id: 9,
    text: "친구 생일 선물을 고를 때:",
    options: [
      {
        text: "친구의 라이프스타일을 분석하고 취향을 확인해 가장 의미 있는 선물을 고른다.",
        style: "T",
      },
      {
        text: "필요한 게 장땡. 친구가 예전에 갖고 싶다던 실용적인 물건을 사준다.",
        style: "P",
      },
      {
        text: "다른 친구들이 뭐 샀는지 눈치 보며 기다리다가 겹치지 않는 선물을 고른다.",
        style: "R",
      },
      {
        text: "이거 요즘 SNS에서 핫해! 요즘 유행하는 힙한 디저트나 신박한 아이템을 고른다.",
        style: "A",
      },
    ],
  },
  {
    id: 10,
    text: "친구 혹은 연인과 영화관에 갔을 때:",
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
    text: "저주 받은 몸뚱아리. 안되겠다, 운동을 시작하기로 마음을 먹은 나:",
    options: [
      {
        text: "지금 내 몸 상태를 정확히 파악해야 어떤 운동을 해야하는지도 알 수 있겠지. 인바디를 제일 먼저 찍어본다",
        style: "T",
      },
      {
        text: "집에서 제일 가까운 곳에 PT를 등록한다.",
        style: "A",
      },
      {
        text: "회사 복지에 헬스장이 있던데, 돈도 굳고 접근성도 제일 좋은 선택이다.",
        style: "P",
      },
      {
        text: "운동을 정말 싫어하는데 어떻게 해야 꾸준히 할 수 있을지 고민해본다. 아마도 누구와 같이 하는 운동이라면 더 재밌을지도? 동네 운동 커뮤니티를 검색해본다.",
        style: "R",
      },
    ],
  },
  {
    id: 12,
    text: "상사가 한 번도 안 해본 어려운 업무를 맡겼다. 나는:",
    options: [
      {
        text: "잠시만요, 패닉 좀 할게요. 모르는 걸 어떻게 하나 싶어 일단 관련 데이터를 긁어모으며 마음을 진정시킨다.",
        style: "R",
      },
      {
        text: "이건 좀 힘들 것 같은데요. 솔직하게 못 하는 부분을 말하고, 지금 내 수준에서 할 수 있는 현실적인 가이드라인을 협상한다.",
        style: "P",
      },
      {
        text: "오히려 좋아! 나를 믿어준 거라 생각하고 일단 부딪쳐 본다. 하다 보면 어떻게든 되겠지!",
        style: "A",
      },
      {
        text: "이 일의 핵심 메커니즘이 뭐지? 업무의 전체적인 구조와 원리를 먼저 공부한다. 로직이 그려져야 시작할 수 있다.",
        style: "T",
      },
    ],
  },
  {
    id: 13,
    text: "완벽했던 데이트 계획이 틀어지기 시작한다. 나는:",
    options: [
      {
        text: "플랜 B 가동. 웨이팅이나 동선 낭비를 최소화할 수 있는 가장 효율적인 근처 대안을 빠르게 찾아낸다.",
        style: "P",
      },
      {
        text: "왜 틀어졌는지 분석해 보자. 원인을 파악한 뒤, 남은 시간과 동선을 논리적으로 계산해 연인에게 최선의 선택지를 제안한다.",
        style: "T",
      },
      {
        text: "이게 데이트의 묘미지! 계획 없이 발길 닿는 대로 움직이는 자유를 즐긴다.",
        style: "A",
      },
      {
        text: "조금 당황스럽지만... 일단 연인의 기분을 살피고, 같이 대화하며 무리하지 않는 선에서 다음 할 일을 정한다.",
        style: "R",
      },
    ],
  },
  {
    id: 14,
    text: "내 전문 분야에 대해 친구가 틀린 주장을 우길 때:",
    options: [
      {
        text: "왜 저렇게 생각하지? 이 친구와의 관계를 다시 생각해봐야 될 것 같다.",
        style: "R",
      },
      {
        text: "ㅇㅋ, 그럴 수 있지. 감정 싸움으로 번지면 시간 낭비, 에너지 낭비다. 적당히 수긍하는 척 대화 주제를 돌린다.",
        style: "P",
      },
      {
        text: "그건 논리적으로 말이 안 돼. 주장의 허점을 조목조목 짚어주며 팩트로 조져(?)준다.",
        style: "T",
      },
      {
        text: "뭐래~ 멍청아! 장난스럽게 놀리면서 분위기를 가볍게 환기시킨다.",
        style: "A",
      },
    ],
  },
  {
    id: 15,
    text: "영화를 보는데 생소한 과학 개념이 등장했다. 나는:",
    options: [
      {
        text: "이거... 실존하는 개념인가? 영화가 끝나자마자 관련 원리와 이론을 검색하며 세계관의 설정을 파헤친다.",
        style: "T",
      },
      {
        text: "대충 뭔지 알겠음. 흐름 끊기기 싫으니 맥락상 이해만 하고 넘어간다. 중요한 건 스토리니까!",
        style: "A",
      },
      {
        text: "나였으면 저 개념을 이렇게 썼을 텐데. 나만의 방식으로 개념을 재해석해보고 스토리와의 연결성을 분석한다.",
        style: "R",
      },
      {
        text: "메모장에 적어둔다. 나중에 정말 필요해지거나 궁금해지면 그때 찾아본다.",
        style: "P",
      },
    ],
  },
  {
    id: 16,
    text: "검지로 벽을 누르면 변비가 해결된다는 정보를 봤다. 나는:",
    options: [
      {
        text: "신박한 헛소리네? 누가 이런 걸 알아냈는지, 어떤 원리라고 주장하는 건지 그 배경이 궁금해진다.",
        style: "R",
      },
      {
        text: "후기 좀 볼까? 실제로 효과 본 사람이 있는지 커뮤니티 반응부터 살피고 검증된 것만 믿는다.",
        style: "P",
      },
      {
        text: "속는 셈 치고 해보지 뭐. 바로 검지를 벽에 갖다 댄다. 성공하면 여기저기 추천하고 다님.",
        style: "A",
      },
      {
        text: "지식적인 근거가 없군. 헛소리라 치부하고 그냥 물이나 많이 마셔야겠다고 생각한다.",
        style: "T",
      },
    ],
  },
  {
    id: 17,
    text: "뉴스에 유니콘이 발견됐다는 보도가 나왔다! 동물학자인 나는:",
    options: [
      {
        text: "짐 싸, 지금 당장! 카메라 하나 들고 발견 장소로 즉시 출발한다.",
        style: "A",
      },
      {
        text: "발견자에게 바로 컨택한다. 언제, 어디서, 어떤 상태로 발견됐는지 팩트 체크부터 해야 한다.",
        style: "T",
      },
      {
        text: "합성이 아니라고? 보도의 진위 여부를 살피고, 만약 진짜라면 역사 속 유니콘 묘사들과의 공통점을 분석한다.",
        style: "R",
      },
      {
        text: "이걸로 논문 쓰면 대박인데. 이 발견이 내 커리어와 학계에 미칠 영향력과 활용 방안을 머릿속으로 계산한다.",
        style: "P",
      },
    ],
  },
  {
    id: 18,
    text: "신데렐라를 찾으려는 왕자에게 조언한다면?",
    options: [
      {
        text: "금발 ✅ 푸른 눈 ✅ 그날 처음 봤으니 지금까지 만난 적 없는 여성 리스트를 작성해 수소문하는 방법을 추천한다.",
        style: "T",
      },
      {
        text: "애초에 잡았어야지! 핸드폰 번호라도 따 놨어야 한다고 팩폭한다.",
        style: "A",
      },
      {
        text: "발 사이즈 데이터부터 모으시죠. 특정 연령대 여성의 발 사이즈를 전수조사해 동선을 최소화하는 효율적 수색을 제안한다.",
        style: "P",
      },
      {
        text: "그녀의 손을 기억해 보세요. 화려한 겉모습과 달리 손에 굳은살이 있었다면, 몰락한 귀족 가문을 찾는 게 빠를 거라고 분석한다.",
        style: "R",
      },
    ],
  },
  {
    id: 19,
    text: "초능력이 생겨 히어로 회사에 취업했는데 행정 업무만 한다면?",
    options: [
      {
        text: "오히려 좋아, 칼퇴 각. 주어진 서류 업무를 가장 빠르고 효율적으로 처리해 실력을 인정받는다.",
        style: "P",
      },
      {
        text: "나랑 비슷한 능력을 가진 선배들은 어땠지? 과거 사례를 찾아보며 내 능력이 나중에 어떤 의미를 가질지 고찰한다.",
        style: "R",
      },
      {
        text: "회사의 데이터베이스를 털어(?)본다. 히어로 체계와 빌런의 패턴을 이론적으로 완벽히 학습하며 때를 기다린다.",
        style: "T",
      },
      {
        text: "현장이 답이다. 몰래 현장 팀원들이랑 친해져서 번개로 출동 나갈 기회를 호시탐탐 노린다.",
        style: "A",
      },
    ],
  },
  {
    id: 20,
    text: "소설 속 캐릭터로 빙의했다! 3년 뒤 죽을 운명이라면?",
    options: [
      {
        text: "설정값 분석 시작. 마법 체계, 정치 구조 등 이 세계의 작동 원리를 파악해 생존 로직을 설계한다.",
        style: "T",
      },
      {
        text: "일단 관망한다. 주변 인물들의 관계도를 살피며 섣불리 움직이지 않고 최적의 타이밍을 기다린다.",
        style: "R",
      },
      {
        text: "생존 루트 최단거리 검색. 감정 낭비 빼고, 지금 당장 내가 가진 자금과 인맥으로 살길부터 빠르게 계산한다.",
        style: "P",
      },
      {
        text: "일단 즐겨! 3년이나 남았는데 뭘 벌써 걱정해? 이 세계의 모든 걸 경험하며 살다 보면 길이 열릴 거라 믿는다.",
        style: "A",
      },
    ],
  },
];

// -- RESULT PROFILES --

const results = {
  A: {
    illustration: "lsquiz-illustrations/activist.png",
    name: "행동형 (Activist)",
    tagline: "일단 질러보고 후회는 나중에",
    strengths:
      "새로운 경험이라면 일단 몸이 먼저 반응한다. 계획서보다 현장이 더 편하고, 브레인스토밍 자리에서 제일 먼저 입을 여는 사람도 너다. 지루함을 못 견디는 대신 분위기를 만드는 건 최고다. 어떤 모임이든 네가 있으면 일이 시작된다. 문제는 끝맺음인데, 그건 나중에 생각해도 되지 뭐.",
    weaknesses:
      "시작은 화려한데 마무리가 흐지부지되는 패턴, 본인도 알고 있다. 충분히 생각하기 전에 말이 먼저 나가서 가끔 수습이 필요하다. 논문 읽기, 자료 정리, 반복 복습 등 혼자 깊게 파고드는 작업에서 에너지가 급격히 떨어진다. '왜 이렇게 느려' 라고 생각한 상대방이 사실 더 좋은 결과를 들고 온 경험, 한 번쯤 있지 않나?",
    growth:
      "행동력은 이미 충분하다. 지금 필요한 건 멈추는 연습이다. 결정하기 전에 딱 하루만 더 두는 습관, 아이디어를 낸 직후 스스로에게 '그래서 그 다음엔?'을 한 번 더 묻는 것, 이 작은 간극이 너의 에너지를 훨씬 더 멀리 데려다 준다.",
    pairings: [
      {
        emoji: "🔵",
        name: "성찰형 (Reflector)",
        role: "속도를 늦춰주는 사람",
        description:
          "행동형은 성찰형에게 본능적으로 답답함을 느낀다. 그런데 그 답답함이 정확히 배워야 할 지점이다. 성찰형은 행동형이 이미 지나쳐버린 것들을 아직 보고 있다 — 놓친 디테일, 고려하지 않은 관점, 나중에 문제가 될 변수들. 행동형이 시작한 일을 성찰형이 수습한다. 이 과정에서 행동형은 성찰형의 '이러한 과정'이 필요했다는 것을 느낄 수 있다.",
        tip: "행동형이 아이디어를 내면 성찰형이 검토하는 구조로 나누면 최강의 조합이 된다.",
      },
      {
        emoji: "🟡",
        name: "이론형 (Theorist)",
        role: "왜 그게 작동하는지 알려주는 사람",
        description:
          "행동형은 해보면서 배우는데, 같은 실수를 반복하는 경우가 있다. 이론형 옆에 있으면 '그게 왜 안 됐는지'에 대한 논리적인 설명을 듣게 되고, 경험이 진정한 학습으로 전환된다. 처음엔 이론 얘기가 지루하게 느껴지겠지만 들어보면 의외로 도움이 된다.",
        tip: null,
      },
    ],
  },

  R: {
    illustration: "lsquiz-illustrations/reflector.png",
    name: "성찰형 (Reflector)",
    tagline: "나는 다 보고 있었어",
    strengths:
      "회의실에서 제일 조용한 사람이 당신인데, 사실 제일 많이 생각하고 있는 사람도 당신이다. 결론을 내리기 전에 다양한 각도에서 상황을 살펴보고, 다른 사람들의 의견을 끝까지 듣고, 충분히 데이터가 쌓였을 때 움직인다. 그래서 당신의 판단은 대부분 틀리지 않는다. 단지, 조금 늦게 도착할 뿐.",
    weaknesses:
      "완벽한 타이밍을 기다리다가 기회가 지나간 적이 있다. 아마 한 번 이상. 관찰하는 데 익숙해서 정작 본인 의견을 드러내는 걸 불편해하는 경향이 있다. 충분한 정보가 모일 때까지 결정을 미루다 보니 주변에서 우유부단하다는 인상을 받기도 한다. 분석하는 과정이 너무 재밌어서, 행동으로 전환하는 게 귀찮게 느껴질 때가 있다.",
    growth:
      "네 강점은 깊이다 — 그 깊이가 행동으로 이어질 때 가장 빛난다. '충분히 봤다'는 기준을 스스로 미리 정해두는 연습을 해보자. 정보 세 가지가 모이면 일단 시작한다 같은 자기만의 트리거. 완벽한 준비보다 적당한 준비 후의 실행이 더 많은 걸 가르쳐줄 때가 많다.",
    pairings: [
      {
        emoji: "🔴",
        name: "행동형 (Activist)",
        role: "일단 뛰어들게 만드는 사람",
        description:
          "성찰형의 가장 큰 성장 과제는 관찰에서 행동으로의 전환이다. 행동형 옆에 있으면 그 전환이 좋은 의미로 강제된다. 행동형은 성찰형이 아직 준비가 안됐다고 느낄 때 이미 시작한다. 그리고 성찰형도 이어서 뛰어들게 된다. 그리고 해보면 '이 정도 준비로도 됐네'를 배운다.",
        tip: "성찰형은 관찰하고 정리한 인사이트를 행동형이 실행하는 구조. 서로의 약점을 완벽하게 보완한다.",
      },
      {
        emoji: "🟢",
        name: "실용형 (Pragmatist)",
        role: "결론으로 데려가주는 사람",
        description:
          "성찰형은 분석하는 과정 자체를 즐기다 보니 결론 내리기를 미루는 경향이 있다. 실용형은 '그래서 뭘 할 건데?'를 자연스럽게 던지는 사람이다. 처음엔 조금 단호하게 느껴질 수 있지만, 그 압력이 성찰형을 행동으로 밀어주는 역할을 한다.",
        tip: null,
      },
    ],
  },

  T: {
    illustration: "lsquiz-illustrations/theorist.png",
    name: "이론형 (Theorist)",
    tagline: "근거 없는 말은 하지 않는다",
    strengths:
      "어떤 주제든 그냥 받아들이지 않는다. 왜? 가 먼저 나오고, 그 뒤에 어떤 원리로? 가 따라온다. 체계적으로 이해가 안 되면 불편하고, 논리적으로 맞지 않는 상황을 보면 지적해야만 속이 시원하다. 혼자 깊이 파고드는 작업에서 오히려 에너지가 생기는 희귀한 타입.",
    weaknesses:
      "'이론상으로는 맞는데 현실에서는...'이라는 말을 자주 듣는다. 완벽하게 이해하고 시작하려다 보니 실행 속도가 느릴 수 있다. 직관이나 감정으로 움직이는 사람들의 판단을 가끔 신뢰하지 않는 경우가 있다. 내 논리가 완벽하다고 생각해서 다른 방식의 접근을 흘려듣는 경우가 생긴다.",
    growth:
      "이해한 것을 직접 해보는 것과 이론 사이의 간극이 생각보다 크다는 걸 인정하는 것부터 시작이다. 70%만 이해된 상태에서 일단 해보는 실험을 의도적으로 늘려보자. 틀리는 경험이 이론을 더 단단하게 만들어준다 — 이건 이론적으로도 맞는 말이다.",
    pairings: [
      {
        emoji: "🟢",
        name: "실용형 (Pragmatist)",
        role: "현실로 데려오는 사람",
        description:
          "이론형은 이론이 완성되면 끝이라고 생각하는 경향이 있다. 실용형은 '그래서 실제로 어떻게 쓸 건데?'를 집요하게 묻는다. 처음엔 깊이 없는 사람처럼 느껴질 수 있지만, 실용형 옆에서 일하다 보면 이론이 현실에 부딪혔을 때 어떻게 변형되어야 하는지를 배운다. 이론과 실용 사이의 간극을 메우는 게 이론형에게 있어서 긍정적인 성장 방향이다.",
        tip: "이론형은 왜(Why)와 어떤 원리로(How it works)를 제공하고, 실용형이 어떻게 쓸지(How to apply)를 결정하면 강력하다.",
      },
      {
        emoji: "🔴",
        name: "행동형 (Activist)",
        role: "완벽한 준비 없이 시작하게 만드는 사람",
        description:
          "이론형에게 행동형은 조금 무모하게 보인다. 그런데 행동형을 관찰하다 보면 — 70%의 이해로도 시작할 수 있고, 나머지 30%는 하면서 채워진다는 걸 경험으로 배운다. 이론가에게 가장 필요한 부분이다.",
        tip: null,
      },
    ],
  },

  P: {
    illustration: "lsquiz-illustrations/pragmatist.png",
    name: "실용형 (Pragmatist)",
    tagline: "쓸모 없으면 내 시간 낭비야",
    strengths:
      "배움의 목적이 명확하다 — '이게 실제로 어디에 쓰이는가'가 중요하다. 필요한 것만 빠르게 익히는 것이 우선이므로, 현실에서 써먹을 수 없는 지식에는 자연스럽게 흥미를 잃는다. 회의에서는 실행 가능한 방법을 제일 먼저 찾고, 문제가 생기면 원인 분석보다 해결책을 먼저 떠올린다. 주변에서 일 잘한다는 말을 자주 듣는 유형이다.",
    weaknesses:
      "효율을 우선시하다 보니 중요하지만 당장 쓸모 없어 보이는 것들 — 이론, 맥락, 큰 그림 — 을 놓칠 수 있다. 과정보다 결과에 집중하다 보니, 팀원들이 왜 그렇게 결정했는지 이해 못하는 경우가 생긴다. 창의적이거나 열린 탐색이 필요한 작업에서 답답함을 느낀다. 가끔 너무 빨리 결론 내리고 싶어서 더 나은 옵션을 검토하지 않고 넘어간다.",
    growth:
      "지금 당장 쓸모없어 보이는 지식이 나중에 결정적인 순간에 연결되는 경우가 생각보다 많다. 한 달에 한 번은 '이게 당장 필요한가?' 라는 필터 없이 순수하게 흥미로운 것을 파고드는 시간을 의도적으로 가져보자. 실용주의자의 효율성에 약간의 탐색력이 더해지면 — 그게 진짜 강력해진다.",
    pairings: [
      {
        emoji: "🟡",
        name: "이론형 (Theorist)",
        role: "큰 그림을 보여주는 사람",
        description:
          "실용형은 당장 필요한 것만 빠르게 익히다 보니 맥락과 원리를 놓치는 경우가 생긴다. 이론형 옆에 있으면 왜 이게 이렇게 작동하는지를 듣게 되는데, 처음엔 '그걸 왜 알아야 해?' 싶다가도 — 나중에 예상치 못한 문제가 생겼을 때 그 배경지식이 결정적인 역할을 한다는 걸 깨닫게 된다.",
        tip: "실용형이 실행 속도를 내고 이론형이 방향을 잡아주면 빠르면서도 흔들리지 않는 팀이 된다.",
      },
      {
        emoji: "🔵",
        name: "성찰형 (Reflector)",
        role: "놓친 걸 짚어주는 사람",
        description:
          "실용형은 결론을 빠르게 내리는 대신 검토 단계를 짧게 가져가는 경향이 있다. 성찰형은 그 빠른 결론에 '잠깐, 이건 고려했어?'를 조용히 던지는 사람이다. 답답하게 느껴질 수 있지만, 그 질문 덕분에 실용형이 나중에 수습해야 할 상황을 미리 막는 경우가 많다.",
        tip: null,
      },
    ],
  },

  ALL: {
    illustration: "lsquiz-illustrations/all-rounder.png",
    name: "팔방미인 (All-Rounder)",
    tagline: "상황 봐서 다 할 수 있음",
    strengths:
      "네 가지 스타일이 고르게 나왔다는 건, 상황에 따라 다른 방식으로 학습하고 반응할 수 있다는 의미다. 계획이 필요하면 계획을 세우고, 직접 해봐야 할 때는 뛰어들 수 있고, 이론이 필요하면 파고들고, 효율이 필요할 땐 핵심만 뽑아낼 수 있다. 어떤 팀에 들어가도 유연하게 적응하는 타입.",
    weaknesses:
      "유연한 게 강점이지만, 반대로 말하면 나는 이렇게 배운다는 자기만의 방식이 덜 뚜렷할 수 있다. 어떤 방식이든 다 될 것 같아서, 오히려 한 방식을 깊게 밀어붙이는 집중력이 부족해질 때가 있다. 상황마다 다르게 반응하다 보니, 주변에서 내 스타일을 예측하기 어렵다고 느낄 수 있다.",
    growth:
      "멀티플레이어의 진짜 강점은 언제 어떤 모드로 전환해야 하는지 아는 것이다. 지금보다 한 단계 더 나아가려면 — 이 네 가지 스타일 중 어떤 상황에서 어떤 걸 의도적으로 선택하는지 스스로 인식해보자. 유연성에 의도가 더해지면 어떤 환경에서도 흔들리지 않는 학습자가 된다.",
    pairings: [
      {
        emoji: "🌈",
        name: "모든 유형",
        role: "모든 스타일과 배울 수 있는 사람",
        description:
          "올라운더에게 필요한 건 특정 유형이 없는 만큼, 어떤 유형과도 배울 수 있는 위치에 있다. 오히려 이들에게 필요한 건 지금 이 프로젝트에서, 이 상황에서, 나는 어떤 모드로 배울 것인가를 스스로 정하는 것이다. 팔방미인은 팀 안에서 통역사 역할을 자연스럽게 하게 된다. 행동형의 에너지를 성찰형에게, 이론형의 논리를 실용형에게 전달하는 사람.",
        tip: null,
      },
    ],
  },
};

// -- STATE --
let currentQ = 0;
const scores = { A: 0, R: 0, T: 0, P: 0 };
const answers = []; // stores the style picked for each question
let pendingAnswer = null; // the option the user has clicked byt not yet confirmed

// -- SCREEN SWITCHING --
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// -- RENDER QUESTION --
function renderQuestion() {
  const q = questions[currentQ];
  const total = questions.length;

  // PROGRESS BAR
  const pct = (currentQ / total) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";

  // QUESTION NUMBER + TEXT
  document.getElementById("question-meta").textContent =
    "질문 " + (currentQ + 1) + " / " + total;
  document.getElementById("question-text").textContent = q.text;

  // ANSWER OPTIONS — built from data, not hardcoded HTML
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  q.options.forEach(function (opt) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", function () {
      selectOption(opt.style, btn);
    });

    // restore previously selected option if coming back
    if (answers[currentQ] === opt.style) {
      btn.classList.add("selected");
    }

    optionsEl.appendChild(btn);
  });

  // restore pending answer highlight if they selected but didn't confirm
  if (pendingAnswer !== null) {
    // pendingAnswer doesn't apply when nagvigating back, so clear it
    pendingAnswer = null;
  }

  // manage nav button states
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  // hide 이전 on first question
  btnPrev.style.visibility = currentQ === 0 ? "hidden" : "visible";

  // 다음 only avtive if this question has been answered before OR an option is selected
  btnNext.disabled = answers[currentQ] === undefined;
}

// -- SELECT OPTION (click on an answer) --
function selectOption(style, clickBtn) {
  // remove highlight from all buttons
  document.querySelectorAll(".option-btn").forEach(function (btn) {
    btn.classList.remove("selected");
  });
  // highlight to clicked button
  clickBtn.classList.add("selected");

  // store what they picked (not commited yet)
  pendingAnswer = style;

  // activate the 다음 button
  document.getElementById("btn-next").disabled = false;
}

// -- GO NEXT (confirm selection and advance) --
function goNext() {
  if (pendingAnswer === null) {
    if (answers[currentQ] !== undefined) {
      currentQ++;
      if (currentQ < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }
    return;
  }

  // undo old score if changing a previous answer
  if (answers[currentQ] !== undefined) {
    scores[answers[currentQ]]--;
  }

  // commit the new answer
  answers[currentQ] = pendingAnswer;
  scores[pendingAnswer]++;
  pendingAnswer = null;

  currentQ++;

  if (currentQ < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// -- GO PREV (step back one question) --
function goPrev() {
  if (currentQ === 0) return;

  currentQ--;
  pendingAnswer = null;
  renderQuestion();
}

// -- BUILD PAIRINGS HTML --
// BUG FIX: parameter is `pairings` (the array), so use it directly — not `r.pairings`
function buildPairingsHtml(pairings) {
  if (!pairings || pairings.length === 0) return "";

  const pairingItems = pairings
    .map(function (p) {
      const tipHtml = p.tip
        ? '<p class="pairing-tip">💡 같이 일할 때: ' + p.tip + "</p>"
        : "";

      return (
        '<div class="pairing-card">' +
        '<p class="pairing-name">' +
        p.emoji +
        " " +
        p.name +
        " — <em>" +
        p.role +
        "</em></p>" +
        '<p class="pairing-desc">' +
        p.description +
        "</p>" +
        tipHtml +
        "</div>"
      );
    })
    .join("");

  return (
    '<div class="pairings-section">' +
    '<h3 class="pairings-title">🤝 이런 유형이랑 같이 공부해봐요</h3>' +
    pairingItems +
    "</div>"
  );
}

// -- BUILD PROFILE HTML --
// Reusable helper so all three showResult() branches stay clean and consistent
function buildProfileHtml(r) {
  return (
    '<div class="result-section"><strong>강점</strong><p>' +
    r.strengths +
    "</p></div>" +
    '<div class="result-section"><strong>약점</strong><p>' +
    r.weaknesses +
    "</p></div>" +
    '<div class="result-section"><strong>성장 팁</strong><p>' +
    r.growth +
    "</p></div>" +
    buildPairingsHtml(r.pairings) // BUG FIX: called here, passing r.pairings
  );
}

function renderIllustration(topStyles) {
  const wrap = document.getElementById("result-illustration-wrap");

  if (topStyles.length === 1 || topStyles.length === 4) {
    // single result or all-rounder: one image centred
    const key = topStyles.length === 4 ? "ALL" : topStyles[0];
    wrap.innerHTML =
      '<img class="result-illustration" src="' +
      results[key].illustration +
      '" alt="" />';
  } else {
    // two or three tied styles: images side by side
    const imgs = topStyles
      .map(function (s) {
        return '<img src="' + results[s].illustration + '" alt="" />';
      })
      .join("");
    wrap.innerHTML =
      '<div class="result-illustrations-dual">' + imgs + "</div>";
  }
}

// -- CALCULATE + SHOW RESULT --
function showResult() {
  const maxScore = Math.max(scores.A, scores.R, scores.T, scores.P);

  const topStyles = Object.keys(scores).filter(function (s) {
    return scores[s] === maxScore;
  });

  // ALL FOUR tied — true all-rounder
  if (topStyles.length === 4) {
    const r = results.ALL;
    document.getElementById("result-type").textContent = r.name;
    document.getElementById("result-tagline").textContent = r.tagline;
    document.getElementById("result-body").innerHTML = buildProfileHtml(r);

    // ONE dominant style
  } else if (topStyles.length === 1) {
    const r = results[topStyles[0]];
    document.getElementById("result-type").textContent = r.name;
    document.getElementById("result-tagline").textContent = r.tagline;
    document.getElementById("result-body").innerHTML = buildProfileHtml(r);

    // TWO OR THREE styles tied — show all profiles, skip pairings to avoid info overload
  } else {
    const names = topStyles
      .map(function (s) {
        return results[s].name;
      })
      .join(" + ");
    document.getElementById("result-type").textContent = names;
    document.getElementById("result-tagline").textContent =
      "여러 가지 학습 유형의 강점을 동시에 가지고 있어요!";
    document.getElementById("result-body").innerHTML = topStyles
      .map(function (s) {
        const r = results[s];
        return (
          '<div class="result-block">' +
          '<p class="result-block-name">' +
          r.name +
          "</p>" +
          '<div class="result-section"><strong>강점</strong><p>' +
          r.strengths +
          "</p></div>" +
          '<div class="result-section"><strong>약점</strong><p>' +
          r.weaknesses +
          "</p></div>" +
          '<div class="result-section"><strong>성장 팁</strong><p>' +
          r.growth +
          "</p></div>" +
          buildPairingsHtml(r.pairings) +
          "</div>"
        );
      })
      .join("");
  }

  renderIllustration(topStyles);
  document.getElementById("progress-bar").style.width = "100%";
  showScreen("screen-result");

  const sections = document.querySelectorAll(
    "#result-body .result-section, #result-body .pairings-section, #result-body .result-block",
  );

  sections.forEach(function (el, index) {
    el.classList.add("Result-animate");
    el.style.animationDelay = index * 0.15 + "s";
  });
}

// -- EVENT LISTENERS --
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
  answers.length = 0; // clear the answers array
  pendingAnswer = null;
  document.getElementById("progress-bar").style.width = "0%";
  showScreen("screen-intro");
});

document.getElementById("btn-next").addEventListener("click", function () {
  goNext();
});

document.getElementById("btn-prev").addEventListener("click", function () {
  goPrev();
});
