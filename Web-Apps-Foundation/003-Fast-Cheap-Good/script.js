const fastCheckbox = document.getElementById("fast");
const cheapCheckbox = document.getElementById("cheap");
const goodCheckbox = document.getElementById("good");
let toggleHistory = [];
fastCheckbox.checked = false;
cheapCheckbox.checked = false;
goodCheckbox.checked = false;

fastCheckbox.addEventListener("change", function (event) {
  if (event.target.checked) {
    toggleHistory.push("fast");
  } else {
    toggleHistory = toggleHistory.filter(
      (element) => !element.includes("fast")
    );
  }
  CheckPermutation(toggleHistory);
});

cheapCheckbox.addEventListener("change", function (event) {
  if (event.target.checked) {
    toggleHistory.push("cheap");
  } else {
    toggleHistory = toggleHistory.filter(
      (element) => !element.includes("cheap")
    );
  }
  CheckPermutation(toggleHistory);
});

goodCheckbox.addEventListener("change", function (event) {
  if (event.target.checked) {
    toggleHistory.push("good");
  } else {
    toggleHistory = toggleHistory.filter(
      (element) => !element.includes("good")
    );
  }
  CheckPermutation(toggleHistory);
});

function CheckPermutation(input) {
  if (input.length > 2) {
    const lastActivatedSwitch = input[1];
    console.log(lastActivatedSwitch);
    toggleHistory = toggleHistory.filter(
      (element) => !element.includes(lastActivatedSwitch)
    );
    document.getElementById(lastActivatedSwitch).checked = false;
  }
}
