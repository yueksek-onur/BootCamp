"use strict";
const ul = document.getElementById("listArea");

const state = {
  users: [],
};

function getUsers(amount) {
  fetch(
    "https://dummy-apis.netlify.app/api/contact-suggestions?count=" + amount
  )
    .then((response) => response.json())
    .then((jsonData) => {
      state.users = jsonData.slice();
      RenderUsers();
      console.log(state.users[5]);
    });
}

function RenderUsers() {
  state.users.forEach((user) => {
    for (const key in user) {
      const li = document.createElement("li");
      if (key === "picture") {
        RenderPicture(user, key);
      }

      li.innerHTML = user[key];
      ul.appendChild(li);
    }
  });
}

function RenderPicture(user, key) {
  const img = document.createElement("img");
  img.src = user[key];
  document.getElementById("listContainer").appendChild(img);
}

getUsers(8);
