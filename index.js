let clock = document.getElementById("hour");
let days = document.getElementById("days");
const weekday = [
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
function showTime() {
  let day = weekday[new Date().getDay()];
  let date = new Date().getDate();
  let month = months[new Date().getMonth()];
  days.innerHTML = day + "," + " " + month + " " + date;
  let hour = new Date().getHours();
  let minuts = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let time = hour > 9 ? hour : "0" + hour;
  let minute = minuts > 9 ? minuts : "0" + minuts;
  let second = seconds > 9 ? seconds : "0" + seconds;
  clock.innerHTML = time + ":" + minute;
}
setInterval(() => {
  showTime();
}, 1000);
