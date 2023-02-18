let allEvents = [
  {
    id: 1,
    name: "Event One",
    duration: "4 hours",
  },
  {
    id: 2,
    name: "Event Two",
    duration: "4 hours",
  },
  {
    id: 3,
    name: "Event Three",
    duration: "4 hours",
  },
  {
    id: 4,
    name: "Event Four",
    duration: "4 hours",
  },
  {
    id: 5,
    name: "Event Five",
    duration: "4 hours",
  },
  {
    id: 6,
    name: "Event Six",
    duration: "4 hours",
  },
];

let output = "";

allEvents.forEach((event) => {
  let eachEvent = `<div class="event">
  <h1>${event.name}</h1>
  <h3>${event.duration}</h3>
  </div>`;
  output += eachEvent;
});

document.getElementById("allEvents").innerHTML = output;
