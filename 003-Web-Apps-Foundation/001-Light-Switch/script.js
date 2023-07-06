btn.addEventListener("click", () => {
  document.body.classList.toggle("body--dark");
  document.getElementById("btn").classList.toggle("button-dark");

  document.title === "Good Night"
    ? (document.title = "Good Morning")
    : (document.title = "Good Night");
});
