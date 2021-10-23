const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

const countDown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.abs(Math.floor(totalSeconds / 3600 / 24));
  const hours = Math.abs(Math.floor(totalSeconds / 3600) % 24);
  const mins = Math.abs(Math.floor((totalSeconds / 60) % 60));
  const seconds = Math.abs(Math.floor(totalSeconds % 60));

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `${time}` : time;
};
countDown();
setInterval(countDown, 1000);
