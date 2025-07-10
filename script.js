let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapCounter = 1;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (interval !== null) return;
  interval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  clearInterval(interval);
  [hours, minutes, seconds] = [0, 0, 0];
  interval = null;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  lapCounter = 1;
}

function recordLap() {
  if (interval === null) return;
  const lapList = document.getElementById("laps");
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCounter++}: ${display.innerText}`;
  lapList.appendChild(lapItem);
}
