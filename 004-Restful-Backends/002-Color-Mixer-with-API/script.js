document.addEventListener("input", () => {
  let r = document.getElementById("red").valueAsNumber;
  let g = document.getElementById("green").valueAsNumber;
  let b = document.getElementById("blue").valueAsNumber;
  displayUpdata(r, g, b);
});

document.getElementById("randomBTN").addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color", (result) => {
    return result;
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("red").valueAsNumber = data.rgb.r;
      document.getElementById("green").valueAsNumber = data.rgb.g;
      document.getElementById("blue").valueAsNumber = data.rgb.b;
      displayUpdata(data.rgb.r, data.rgb.g, data.rgb.b, data.color);
    });
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

function displayUpdata(r, g, b, HexValue) {
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  if (HexValue) {
    document.getElementById("color-value").innerHTML = HexValue;
  } else {
    DisplayHex(r, g, b);
    document.getElementById("color-value").innerHTML =
      "#" + pad(r, 2) + "" + pad(g, 2) + "" + pad(b, 2);
  }
}

initial();
