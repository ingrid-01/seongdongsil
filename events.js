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

// 2. Events array
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
    description: "",
    links: [],
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
    description: "",
    links: [],
  },
];

// 3. DOM References
const eventsContainer = document.getElementById("events");
const addEventBtn = document.getElementById("add-event");
const modalOverlay = document.getElementById("modal-overlay");
const cancelBtn = document.getElementById("cancel-btn");
const eventForm = document.getElementById("event-form");
const categorySelect = document.getElementById("event-category");
const subCategoryGroup = document.getElementById("sub-category-group");
const addLinkBtn = document.getElementById("add-link-btn");
const linkInput = document.getElementById("event-link");
const linksList = document.getElementById("links-list");
const detailView = document.getElementById("detail-view");
const detailContent = document.getElementById("detail-content");
const backBtn = document.getElementById("back-btn");
let tempLinks = [];

// 4. Save/Load
const saveEvents = () => {
  localStorage.setItem("events", JSON.stringify(events));
};

const loadEvents = () => {
  const saved = localStorage.getItem("events");
  if (saved) {
    const loaded = JSON.parse(saved);
    events.length = 0;
    loaded.forEach((e) => events.push(e));
  }
};

// 5. Display Events — simple list view only
const displayEvents = () => {
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <div class="event-tags">
        <span class="tag category">${event.category}</span>
        ${event.subCategory ? `<span class="tag sub">${event.subCategory}</span>` : ""}
        <span class="tag region">${event.region}</span>
      </div>
      <h3>${event.title}</h3>
      <p>📅 ${event.date} (${event.day})</p>
      <p>⏰ ${event.startTime} ~ ${event.endTime}</p>
      <p>📍 ${event.location}</p>
      <p class="more-hint">더보기...</p>
    `;

    card.addEventListener("click", () => {
      showDetail(event.id);
    });

    eventsContainer.appendChild(card);
  });
};

// 5b. Show Detail View
const showDetail = (eventId) => {
  const event = events.find((e) => e.id === eventId);
  if (!event) return;

  const isAttending = event.attendees.includes(nickname);
  const isCreator = event.createdBy === nickname;

  // Switch views
  eventsContainer.classList.add("hidden");
  detailView.classList.remove("hidden");

  // Basic info
  detailContent.innerHTML = `
    <div class="detail-tags">
      <span class="tag category">${event.category}</span>
      ${event.subCategory ? `<span class="tag sub">${event.subCategory}</span>` : ""}
      <span class="tag region">${event.region}</span>
    </div>
    <h2>${event.title}</h2>
    <p>📅 ${event.date} (${event.day})</p>
    <p>⏰ ${event.startTime} ~ ${event.endTime}</p>
    <p>📍 ${event.location}</p>
  `;

  // Description
  if (event.description) {
    const desc = document.createElement("p");
    desc.classList.add("detail-description");
    desc.textContent = event.description;
    detailContent.appendChild(desc);
  }

  // Links
  if (event.links && event.links.length > 0) {
    const linksDiv = document.createElement("div");
    linksDiv.classList.add("detail-links");
    linksDiv.innerHTML = "<h4>관련 링크</h4>";
    event.links.forEach((url) => {
      const a = document.createElement("a");
      a.href = url;
      a.textContent = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksDiv.appendChild(a);
    });
    detailContent.appendChild(linksDiv);
  }

  // Attendees
  const attendeesDiv = document.createElement("div");
  attendeesDiv.classList.add("detail-attendees");
  attendeesDiv.innerHTML = `
    <h4>참여자 ${event.attendees.length}명</h4>
    <p>${event.attendees.join(", ")}</p>
  `;
  detailContent.appendChild(attendeesDiv);

  // Join/leave button
  const joinBtn = document.createElement("button");
  joinBtn.classList.add("join-btn");
  joinBtn.textContent = isAttending ? "참여 취소" : "참여하기";
  joinBtn.classList.add(isAttending ? "attending" : "not-attending");
  joinBtn.addEventListener("click", () => {
    if (isAttending) {
      event.attendees = event.attendees.filter((a) => a !== nickname);
    } else {
      event.attendees.push(nickname);
    }
    saveEvents();
    showDetail(eventId);
  });
  detailContent.appendChild(joinBtn);

  // Creator buttons
  if (isCreator) {
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "수정";
    editBtn.addEventListener("click", () => {
      document.getElementById("event-category").value = event.category;
      document.getElementById("event-region").value = event.region;
      document.getElementById("event-title").value = event.title;
      document.getElementById("event-date").value = event.date;
      document.getElementById("event-start").value = event.startTime;
      document.getElementById("event-end").value = event.endTime;
      document.getElementById("event-location").value = event.location;
      document.getElementById("event-description").value =
        event.description || "";
      if (event.subCategory) {
        subCategoryGroup.classList.remove("hidden");
        document.getElementById("event-sub").value = event.subCategory;
      }
      tempLinks = [...event.links];
      linksList.innerHTML = "";
      event.links.forEach((url) => {
        const li = document.createElement("li");
        li.textContent = url;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "✕";
        removeBtn.addEventListener("click", () => {
          tempLinks = tempLinks.filter((l) => l !== url);
          li.remove();
        });
        li.appendChild(removeBtn);
        linksList.appendChild(li);
      });
      modalOverlay.classList.remove("hidden");
      eventForm.dataset.editId = event.id;
    });
    detailContent.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => {
      const confirm = window.confirm(`"${event.title}" 을 삭제할까요?`);
      if (confirm) {
        const index = events.indexOf(event);
        events.splice(index, 1);
        saveEvents();
        detailView.classList.add("hidden");
        eventsContainer.classList.remove("hidden");
        displayEvents();
      }
    });
    detailContent.appendChild(deleteBtn);
  }

  // Comments
  const commentsDiv = document.createElement("div");
  commentsDiv.classList.add("detail-comments");
  commentsDiv.innerHTML = `<h4>댓글 ${event.comments.length}개</h4>`;

  event.comments.forEach((comment, index) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = `${comment.nickname}: ${comment.text}`;

    if (comment.nickname === nickname) {
      const deleteComment = document.createElement("button");
      deleteComment.textContent = "삭제";
      deleteComment.addEventListener("click", () => {
        event.comments.splice(index, 1);
        saveEvents();
        showDetail(eventId);
      });
      commentDiv.appendChild(deleteComment);
    }
    commentsDiv.appendChild(commentDiv);
  });

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "댓글을 입력해주세요";

  const commentSubmit = document.createElement("button");
  commentSubmit.textContent = "게시";
  commentSubmit.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text) return;
    event.comments.push({
      nickname: nickname,
      text: text,
      createdAt: new Date().toISOString(),
    });
    saveEvents();
    showDetail(eventId);
  });

  commentsDiv.appendChild(commentInput);
  commentsDiv.appendChild(commentSubmit);
  detailContent.appendChild(commentsDiv);
}; // ← showDetail ends here

// 6. Modal Logic
addEventBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  eventForm.reset();
  tempLinks = [];
  linksList.innerHTML = "";
});

categorySelect.addEventListener("change", () => {
  if (categorySelect.value === "스터디벙") {
    subCategoryGroup.classList.remove("hidden");
  } else {
    subCategoryGroup.classList.add("hidden");
  }
});

// Add link button — in modal logic, NOT inside submit!
addLinkBtn.addEventListener("click", () => {
  const url = linkInput.value.trim();
  if (!url) return;
  if (!url.startsWith("http")) {
    alert("유효한 URL을 입력해주세요 (http:// 또는 https://)");
    return;
  }
  tempLinks.push(url);
  const li = document.createElement("li");
  li.textContent = url;
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "✕";
  removeBtn.addEventListener("click", () => {
    tempLinks = tempLinks.filter((l) => l !== url);
    li.remove();
  });
  li.appendChild(removeBtn);
  linksList.appendChild(li);
  linkInput.value = "";
});

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateObj = new Date(document.getElementById("event-date").value);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[dateObj.getDay()];
  const editId = eventForm.dataset.editId;

  if (editId) {
    const index = events.findIndex((e) => e.id === editId);
    if (index !== -1) {
      events[index].category = document.getElementById("event-category").value;
      events[index].subCategory =
        document.getElementById("event-sub").value || null;
      events[index].region = document.getElementById("event-region").value;
      events[index].title = document.getElementById("event-title").value;
      events[index].date = document.getElementById("event-date").value;
      events[index].day = dayOfWeek;
      events[index].startTime = document.getElementById("event-start").value;
      events[index].endTime = document.getElementById("event-end").value;
      events[index].location = document.getElementById("event-location").value;
      events[index].description = document
        .getElementById("event-description")
        .value.trim();
      events[index].links = [...tempLinks];
    }
    delete eventForm.dataset.editId;
  } else {
    const newEvent = {
      id: `event_${Date.now()}`,
      category: document.getElementById("event-category").value,
      subCategory: document.getElementById("event-sub").value || null,
      region: document.getElementById("event-region").value,
      title: document.getElementById("event-title").value,
      date: document.getElementById("event-date").value,
      day: dayOfWeek,
      startTime: document.getElementById("event-start").value,
      endTime: document.getElementById("event-end").value,
      location: document.getElementById("event-location").value,
      createdBy: nickname,
      attendees: [nickname],
      comments: [],
      description: document.getElementById("event-description").value.trim(),
      links: [...tempLinks],
    };
    events.push(newEvent);
  }

  saveEvents();
  displayEvents();
  modalOverlay.classList.add("hidden");
  eventForm.reset();
  subCategoryGroup.classList.add("hidden");
  tempLinks = [];
  linksList.innerHTML = "";
});

// Back button
backBtn.addEventListener("click", () => {
  detailView.classList.add("hidden");
  eventsContainer.classList.remove("hidden");
  displayEvents();
});

// 7. Initialise
loadEvents();
displayEvents();
