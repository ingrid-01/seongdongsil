// 1. Nickname System
let nickname = localStorage.getItem("nickname");

if (!nickname || nickname.trim() === "") {
  nickname = prompt("환영합니다! 닉네임을 입력해주세요 🤠");

  while (!nickname || nickname.trim() === "") {
    nickname = prompt("닉네임을 입력해주세요! (필수)");
  }

  localStorage.setItem("nickname", nickname.trim());
}

console.log(`현재 사용자: ${nickname}`);

// 2. Events array - hardcoded starting data
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

// 3. Get DOM container
const eventsContainer = document.getElementById("events");
// Modal elements
const addEventBtn = document.getElementById("add-event");
const modalOverlay = document.getElementById("modal-overlay");
const cancelBtn = document.getElementById("cancel-btn");
const eventForm = document.getElementById("event-form");
const categorySelect = document.getElementById("event-category");
const subCategoryGroup = document.getElementById("sub-category-group");

// 4. Save and load functions  for localStorage
// save events to localStorage whenever there's a change
const saveEvents = () => {
  localStorage.setItem("events", JSON.stringify(events));
};

// load events from localStorage
const loadEvents = () => {
  const saved = localStorage.getItem("events");
  if (saved) {
    const loaded = JSON.parse(saved);
    events.length = 0; // clear current array
    loaded.forEach((e) => events.push(e)); // refill with saved data
  }
};

// 5. displayEvents function
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

    // Event details
    const details = document.createElement("div");
    details.classList.add("event-details");
    details.innerHTML = `
      <h3>${event.title}</h3>
      <p>📅 ${event.date} (${event.day})</p>
      <p>⏰ ${event.startTime} ~ ${event.endTime}</p>
      <p>📍 ${event.location}</p>
    `;

    // join btn
    const joinBtn = document.createElement("button");
    joinBtn.classList.add("join-btn");

    // Check if user is already an attendee
    const isAttending = event.attendees.includes(nickname);
    joinBtn.textContent = isAttending ? "참여 취소" : "참여하기";
    joinBtn.classList.add(isAttending ? "attending" : "not-attending");

    joinBtn.addEventListener("click", () => {
      if (isAttending) {
        // Remove from attendees
        event.attendees = event.attendees.filter((a) => a !== nickname);
      } else {
        // Add to attendees
        event.attendees.push(nickname);
      }
      saveEvents(); // Save changes
      displayEvents(); // Refresh the display
    });

    // attendees section
    const attendeesSection = document.createElement("div");
    attendeesSection.classList.add("attendees-section");

    // attendees toggle button
    const attendeesToggle = document.createElement("button");
    attendeesToggle.classList.add("toggle-btn");
    attendeesToggle.textContent = `참여자 ${event.attendees.length}명 ⏷`;

    // attendees list - hidden by default
    const attendeesList = document.createElement("ul");
    attendeesList.classList.add("attendees-list", "hidden");

    event.attendees.forEach((attendee) => {
      const li = document.createElement("li");
      li.textContent = attendee;
      attendeesList.appendChild(li);
    });

    // Toggle visibility on click
    attendeesToggle.addEventListener("click", () => {
      attendeesList.classList.toggle("hidden");
      const isOpen = !attendeesList.classList.contains("hidden");
      attendeesToggle.textContent = `참여자: ${event.attendees.length}명 ${isOpen ? "⏶" : "⏷"}`;
    });

    attendeesSection.appendChild(attendeesToggle);
    attendeesSection.appendChild(attendeesList);

    card.appendChild(tags);
    card.appendChild(details);
    card.appendChild(attendeesSection);
    card.appendChild(joinBtn);
    eventsContainer.appendChild(card);
  });
};

// 6. Modal Logic
// event listeners for opening/closing modal

// Open modal
addEventBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

// Close modal
cancelBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  eventForm.reset(); // clears all form fields
});

// Show/hide sub-category based on category selection
categorySelect.addEventListener("change", () => {
  if (categorySelect.value === "스터디벙") {
    subCategoryGroup.classList.remove("hidden");
  } else {
    subCategoryGroup.classList.add("hidden");
  }
});

// 7. Initialise
loadEvents();
displayEvents();
