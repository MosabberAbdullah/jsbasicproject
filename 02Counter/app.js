const decBtn = document.getElementById("decbtn");
const resBtn = document.getElementById("resbtn");
const incBtn = document.getElementById("incbtn");

const displayCount = document.getElementById("displayCount");

let counter = 0;

// increase btn
incBtn.addEventListener("click", () => {
  counter++;
  displayCount.innerHTML = counter;
});

// decrease btn
decBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  displayCount.innerHTML = counter;
});

// reset btn
resBtn.addEventListener("click", () => {
  counter = 0;
  displayCount.innerHTML = counter;
});
