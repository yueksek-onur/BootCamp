const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("body--dark");

  btn.classList.toggle("button-dark");

  document.title === "Good Night"
    ? (document.title = "Good Morning")
    : (document.title = "Good Night");
});
