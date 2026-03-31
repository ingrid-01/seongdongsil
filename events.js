let nickname = localStorage.getItem("nickname");

if (!nickname || nickname.trim() === "") {
  nickname = prompt("환영합니다! 닉네임을 입력해주세요 🤠");

  while (!nickname || nickname.trim() === "") {
    nickname = prompt("닉네임을 입력해주세요! (필수)");
  }

  localStorage.setItem("nickname", nickname.trim());
}

console.log(`현재 사용자: ${nickname}`);

const events = [
  {
    id: "event_001",
    category: "스터디벙",
    subCategory: "열공",
    region: "의왕",
    title: "같이 공부할 사람!",
    date: "2026-03-30",
    day: "월",
    startTime: "14:30",
    endTime: "20:30",
    location: "포일 청년발전소",
    createdBy: "Ingrid",
    attendees: ["Ingrid", "현재"],
    comments: [],
  },
  {
    id: "event_002",
    category: "운동벙",
    subCategory: null,
    region: "안양",
    title: "저녁 러닝 같이 해요!",
    date: "2026-04-01",
    day: "수",
    startTime: "19:00",
    endTime: "21:00",
    location: "안양천",
    createdBy: "현재",
    attendees: ["현재"],
    comments: [],
  },
];

const eventsContainer = document.getElementById("events");

const displayEvents = () => {
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    const tags = document.createElement("div");
    tags.classList.add("event-tags");
    tags.innerHTML = `
      <span class="tag category">${event.category}</span>
    ${event.subCategory ? `<span class="tag sub">${event.subCategory}</span>` : ""}
      <span class="tag region">${event.region}</span>
    `;

    // Event detaails
    const details = document.createElement("div");
    details.classList.add("event-details");
    details.innerHTML = `
      <h3>${event.title}</h3>
      <p>📅 ${event.date} (${event.day})</p>
      <p>⏰ ${event.startTime} ~ ${event.endTime}</p>
      <p>📍 ${event.location}</p>
    `;

    card.appendChild(tags);
    card.appendChild(details);
    eventsContainer.appendChild(card);
  });
};

displayEvents();
