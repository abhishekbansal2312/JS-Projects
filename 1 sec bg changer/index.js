const title = document.querySelector(".title");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

let timeInterval;

const colorChanger = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changebgcolor = () => {
  document.body.style.backgroundColor = colorChanger();
};
start.addEventListener("click", function () {
  if (!timeInterval) {
    timeInterval = setInterval(changebgcolor, 1000);
  }
});

stop.addEventListener("click", function () {
  if (timeInterval) {
    clearInterval(timeInterval);
    timeInterval = null;
  }
});
