document.getElementById("quoteBTN").addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/quote", (result) => {
    return result.json();
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("quote").innerHTML = data.quote;
      document.getElementById("author").innerHTML = data.author;
    });
});
