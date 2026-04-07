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

// 3. Get DOM container
const eventsContainer = document.getElementById("events");
// Modal elements
const addEventBtn = document.getElementById("add-event");
const modalOverlay = document.getElementById("modal-overlay");
const cancelBtn = document.getElementById("cancel-btn");
const eventForm = document.getElementById("event-form");
const categorySelect = document.getElementById("event-category");
const subCategoryGroup = document.getElementById("sub-category-group");
const addLinkBtn = document.getElementById("add-link-btn");
const linkInput = document.getElementById("event-link");
const linksList = document.getElementById("links-list");
let tempLinks = []; // temporary storage whie form is open
const detailView = document.getElementById("detail-view");
const detailContent = document.getElementById("detail-content");
const backBtn = document.getElementById("back-btn");

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

    // delete button - only show if current user created the event
    if (event.createdBy === nickname) {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "삭제";

      deleteBtn.addEventListener("click", () => {
        const confirm = window.confirm(`"${event.title}" 을 삭제할까요?`);
        if (confirm) {
          const index = events.indexOf(event);
          events.splice(index, 1);
          saveEvents();
          displayEvents();
        }
      });

      card.appendChild(deleteBtn);
    }

    // Edit button - only show if current user created the event
    if (event.createdBy === nickname) {
      const editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.textContent = "수정";

      editBtn.addEventListener("click", () => {
        //Pre-fill form w exisiting event data
        document.getElementById("event-category").value = event.category;
        document.getElementById("event-region").value = event.region;
        document.getElementById("event-title").value = event.title;
        document.getElementById("event-date").value = event.date;
        document.getElementById("event-start").value = event.startTime;
        document.getElementById("event-end").value = event.endTime;
        document.getElementById("event-location").value = event.location;
        document.getElementById("event-description").value =
          event.description || "";

        tempLinks = [...event.links];
        linksList.innerHTML = "";
        event.links.forEach((url) => {
          const li = document.createElement("li");
          li.textContent = url;
          const removeLinkBtn = document.createElement("button");
          removeLinkBtn.type = "button";
          removeLinkBtn.textContent = "x";
          removeLinkBtn.addEventListener("click", () => {
            tempLinks = tempLinks.filter((l) => l !== url);
            li.remove();
          });
          li.appendChild(removeLinkBtn);
          linksList.appendChild(li);
        });

        // Handle sub-category
        if (event.subCategory) {
          subCategoryGroup.classList.remove("hidden");
          document.getElementById("event-sub").value = event.subCategory;
        }

        // Open modal
        modalOverlay.classList.remove("hidden");

        // Store which event is being edited
        eventForm.dataset.editId = event.id;
      });

      card.appendChild(editBtn);
    }

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

    // Comments section
    const commentsSection = document.createElement("div");
    commentsSection.classList.add("comments-section");

    // Comments toggle button
    const commentsToggle = document.createElement("button");
    commentsToggle.classList.add("toggle-btn");
    commentsToggle.textContent = `댓글 ${event.comments.length}개 ⏷`;

    // Comments list - hidden by default
    const commentsList = document.createElement("div");
    commentsList.classList.add("comments-list", "hidden");

    // Display exisiting comments
    event.comments.forEach((comment, index) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

      const commentText = document.createElement("p");
      commentText.textContent = `${comment.nickname}: ${comment.text}`;

      commentDiv.appendChild(commentText);

      // Delete button - only for own comments
      if (comment.nickname === nickname) {
        const deleteComment = document.createElement("button");
        deleteComment.classList.add("delete-comment-btn");
        deleteComment.textContent = "삭제";

        deleteComment.addEventListener("click", () => {
          event.comments.splice(index, 1);
          saveEvents();
          displayEvents();
        });

        commentDiv.appendChild(deleteComment);
      }

      commentsList.appendChild(commentDiv);
    });

    // Comment input area
    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "댓글을 입력해주세요";
    commentInput.classList.add("comment-input");

    const commentSubmit = document.createElement("button");
    commentSubmit.classList.add("comment-submit-btn");
    commentSubmit.textContent = "게시";

    commentSubmit.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (!text) return; // ignore empty comments

      event.comments.push({
        nickname: nickname,
        text: text,
        createdAt: new Date().toISOString(),
      });

      saveEvents();
      displayEvents();
    });

    // Toggle visibility
    commentsToggle.addEventListener("click", () => {
      commentsList.classList.toggle("hidden");
      const isOpen = !commentsList.classList.contains("hidden");
      commentsToggle.textContent = `댓글 ${event.comments.length}개 ${isOpen ? "⏶" : "⏷"}`;
    });

    commentsSection.appendChild(commentsToggle);
    commentsSection.appendChild(commentsList);
    commentsSection.appendChild(commentInput);
    commentsSection.appendChild(commentSubmit);

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
    card.appendChild(commentsSection);
    card.appendChild(joinBtn);
    eventsContainer.appendChild(card);
  });
};

const showDetail = (eventId) => {
  const event = events.find((e) => e.id === eventId);
  if (!event) return;

  // Switch views
  eventsContainer.classList.add("hidden");
  detailView.classList.remove("hidden");

  // Build detail content
  const isAttending = event.attendees.includes(nickname);
  const isCreator = event.createdBy === nickname;

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

  // Description if exists
  if (event.description) {
    const desc = document.createElement("p");
    desc.classList.add("detail-description");
    desc.textContent = event.description;
    detailContent.appendChild(desc);
  }

  // Links if exists
  if (event.links && event.links.length > 0) {
    const linksDiv = document.createElement("div");
    linksDiv.classList.add("detail-links");
    linksDiv.innerHTML = "<h3>관련 링크</h3>";
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
};

// Attendees
const attendeesDiv = document.createElement("div");
attendeesDiv.classList.add("detail-attendees");
attendeesDiv.innerHTML = `<h4>참여자 (${event.attendees.length}명)</h4>
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
  showDetail(eventId); // Refresh detail view
});
detailContent.appendChild(joinBtn);

// Creator buttons
if (isCreator) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "수정";
  editBtn.addEventListener("click", () => {
    // Pre-fill form with existing data
    document.getElementById("event-category").value = event.category;
    document.getElementById("event-region").value = event.region;
    document.getElementById("event-title").value = event.title;
    document.getElementById("event-date").value = event.date;
    document.getElementById("event-start").value = event.startTime;
    document.getElementById("event-end").value = event.endTime;
    document.getElementById("event-location").value = event.location;
    document.getElementById("event-description").value =
      event.description || "";
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
  tempLinks = []; // clear temp links
  linksList.innerHTML = ""; // clear displayed links
});

// Show/hide sub-category based on category selection
categorySelect.addEventListener("change", () => {
  if (categorySelect.value === "스터디벙") {
    subCategoryGroup.classList.remove("hidden");
  } else {
    subCategoryGroup.classList.add("hidden");
  }
});

// Handle form submission
eventForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page from refreshing!

  // Get day of week from date
  const dateObj = new Date(document.getElementById("event-date").value);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[dateObj.getDay()];

  const editId = eventForm.dataset.editId;

  if (editId) {
    // Editing existing event
    const index = events.findIndex((e) => e.id === editId);
    if (index !== -1) {
      // Update only the editable fields - keep attendees and comments!
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
    delete eventForm.dataset.editId; // clear edit mode
  } else {
    // creating new event
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

  addLinkBtn.addEventListener("click", () => {
    const url = linkInput.value.trim();

    if (!url) return; // ignore empty

    // Basic URL validation
    if (!url.startsWith("http")) {
      alert("유효한 URL을 입력해주세요 (http:// 또는 https://");
      return;
    }

    tempLinks.push(url);

    // Show link in list
    const li = document.createElement("li");
    li.textContent = url;

    const removeBtn = document.createElement("button");
    removeLinkBtn.type = "button";
    removeLinkBtn.textContent = "x";
    removeLinkBtn.addEventListener("click", () => {
      tempLinks = tempLinks.filter((l) => l !== url);
      li.remove();
    });

    li.appendChild(removeBtn);
    linksList.appendChild(li);
    linkInput.value = ""; // clear input
  });

  saveEvents();
  displayEvents();
  modalOverlay.classList.add("hidden");
  eventForm.reset();
  subCategoryGroup.classList.add("hidden");
});

// 7. Initialise
loadEvents();
displayEvents();
