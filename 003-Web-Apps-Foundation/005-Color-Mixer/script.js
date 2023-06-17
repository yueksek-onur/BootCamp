document.addEventListener("input", () => {
  let r = document.getElementById("red").valueAsNumber;
  let g = document.getElementById("green").valueAsNumber;
  let b = document.getElementById("blue").valueAsNumber;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  DisplayHex(r, g, b);
  document.getElementById("color-value").innerHTML =
    "#" + pad(r, 2) + "" + pad(g, 2) + "" + pad(b, 2);
});

function DisplayHex(r, g, b) {
  document.getElementById("color-value").innerHTML =
    "#" + pad(r, 2) + "" + pad(g, 2) + "" + pad(b, 2);
}

function pad(num, size) {
  num = num.toString(16);
  while (num.length < size) num = "0" + num;
  return num;
}

function initial() {
  let r = document.getElementById("red").valueAsNumber;
  let g = document.getElementById("green").valueAsNumber;
  let b = document.getElementById("blue").valueAsNumber;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  DisplayHex(r, g, b);
}

initial();
