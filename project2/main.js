const clk = document.getElementById("clock");
const dateEl = document.getElementById("date");

function updateClock() {
  const now = new Date();

  // Use let (because we modify the values)
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  clk.textContent = `${hours}:${minutes}:${seconds}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const today = now.getDate();
  const year = now.getFullYear();

  // Use readable date format
  dateEl.textContent = `${dayName}, ${monthName} ${today}, ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
