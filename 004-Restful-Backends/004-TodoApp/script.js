"use strict";

let todo = {};

const ul = document.getElementById("todo-list");
const addBTN = document.getElementById("add-button");
const divFilter = document.getElementById("div-filter");
const removeBTN = document.getElementById("remove-button");
const inputfield = document.getElementById("input-field");

addBTN.addEventListener("click", () => {
  console.log(inputfield.value);
  getDataFromAPI("POST", 0, "", inputfield.value);
  inputfield.value = "";
});

divFilter.addEventListener("click", () => {
  if (document.getElementById("input-all").checked) {
    getDataFromAPI();
  }
  if (document.getElementById("input-open").checked) {
    getDataFromAPI(0, 0, 0, 0, "open");
  }
  if (document.getElementById("input-done").checked) {
    getDataFromAPI(0, 0, 0, 0, "done");
  }
});

removeBTN.addEventListener("click", () => {
  for (const child of ul.children) {
    if (child.children[0].checked) {
      console.log(child.id);
      getDataFromAPI("DELETE", child.id);
      getDataFromAPI();
    }
  }
});

function renderTodos(todos) {
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    checkBox.checked = todo.done;

    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(todo.description));
    li.setAttribute("id", todo.id);
    ul.appendChild(li);
  });
}

function getDataFromAPI(HttpMethod, id, todos, newTodo, filter) {
  const URL = "http://localhost:4730/todos";

  if (HttpMethod === "POST") {
    const todo = { description: newTodo, done: false };
    fetch(URL, {
      method: HttpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((req) => req.json())
      .then((todos) => {
        console.log(todos);
        renderTodos(todos);
      });
  } else if (HttpMethod === "PUT") {
    //
  } else if (HttpMethod === "DELETE") {
    fetch(URL + "/" + id, {
      method: HttpMethod,
    })
      .then((res) => res.json())
      .then(() => {});
  } else {
    if (filter === "open") {
      fetch(URL)
        .then((req) => req.json())
        .then((todos) => {
          const filteredArray = todos.filter((todos) => todos.done === false);
          renderTodos(filteredArray);
        });
    } else if (filter === "done") {
      fetch(URL)
        .then((req) => req.json())
        .then((todos) => {
          const filteredArray = todos.filter((todos) => todos.done === true);
          console.log(filteredArray);
          renderTodos(filteredArray);
        });
    } else {
      fetch(URL)
        .then((req) => req.json())
        .then((todos) => {
          console.log(todos);
          renderTodos(todos);
        });
    }
  }
}

getDataFromAPI();
