// Load Events Dynamically
function renderEvents(eventsToRender) {
  const eventList = document.getElementById("eventList");
  eventList.innerHTML = ""; // Clear previous events

  eventsToRender.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <h3>${event.title}</h3>
      <p>${event.date} | ${event.location}</p>
      <p>${event.description.substring(0, 60)}...</p>
      <button onclick="viewEventDetails(${event.id})">View Details</button>
    `;
    eventList.appendChild(eventCard);
  });
}

// Save Event ID and Navigate to Event Details
function viewEventDetails(eventId) {
  const event = events.find(e => e.id === eventId);
  localStorage.setItem("selectedEvent", JSON.stringify(event));
  window.location.href = "event.html";
}
console.log(events);

// Initial Render
renderEvents(events);