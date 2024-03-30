const title = document.querySelector(".title");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let timeInterval;

const sayDate = function () {
  title.innerHTML = new Date().toUTCString();
};
start.addEventListener("click", function () {
  if (!timeInterval) {
    // Check if the interval is not already running
    timeInterval = setInterval(sayDate, 1000);
    console.log("key");
  }
});
stop.addEventListener("click", function () {
  if (timeInterval) {
    clearInterval(timeInterval);
    timeInterval = null;
    title.innerHTML = "Hello World!";
  }
});
// Initial call to display the date immediately
