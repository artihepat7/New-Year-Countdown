const countdown = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear + 1;
function updateCountDown() {
  const currentDate = new Date();
  const diff = newYearTime - currentDate;
  //   console.log(diff);
  const seconds = Math.floor(diff / 1000) % 60;
  const mins = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  daysEl.innerText = days;
  hoursEl.innerText = hours < 10 ? "0" + hours : hours;
  minutesEl.innerText = mins < 10 ? "0" + mins : mins;
  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}

//show spinner
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountDown, 1000);
