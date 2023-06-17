"use strict";

let counter = 0;
let counterMax = 100;

document.getElementById("main").addEventListener("click", () => {
  if (counter === 100) {
    counter = 0;
  } else {
    counter++;
  }
  counterConditionCheck(counter, counterMax);
});

document.getElementById("button").addEventListener("click", () => {
  counter = 0;
  updateFrontend(counter);
  document.getElementById("counter").innerHTML = "0";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    if (counter === 100) {
      counter = 0;
    } else {
      counter++;
    }
    counterConditionCheck(counter, counterMax);
  }
  button.blur();
});

function counterConditionCheck(counter, counterMax) {
  if (counter % counterMax === 0) {
    updateFrontend(counter);
    counter = 0;
  } else {
    updateFrontend(counter);
  }
}

function updateFrontend(counter) {
  let displayNum = parseInt(document.getElementById("counter").innerHTML);
  displayNum++;

  document.getElementById("counter").innerHTML = displayNum + "";
  document.getElementById("main").style.setProperty("--counter", counter + "%");
}
