let passwordField = document.getElementById("password");
let toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "hide password";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "show password";
  }
});
