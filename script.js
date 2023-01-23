const aHour = document.querySelector(".a-clock-hour");
const aMin = document.querySelector(".a-clock-minutes");
const aSec = document.querySelector(".a-clock-seconds");

const dHour = document.querySelector(".d-clock-hour");
const dMin = document.querySelector(".d-clock-minutes");
const dSec = document.querySelector(".d-clock-seconds");
const dCpoints = document.querySelectorAll(".points");

// Time Update:
function time() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  // ... analog Clock
  aHour.style.setProperty("--hour", h * 30 + "deg");
  aMin.style.setProperty("--minutes", m * 6 + "deg");
  aSec.style.setProperty("--seconds", s * 6 + "deg");

  // ... digital Clock
  function setDigitalTime(a) {
    let result = "0" + a.toString();
    return result.slice(-2);
  }

  dHour.innerText = setDigitalTime(h);
  dMin.innerText = setDigitalTime(m);
  dSec.innerText = setDigitalTime(s);

  for (let i = 0; i < dCpoints.length; i++) {
    dCpoints[i].classList.toggle("points-hidden");
  }
}

time();
setInterval(time, 1000);
