"use strict";

class Todo {
  constructor(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDescription(newDescription) {
    this.description = newDescription;
  }
}

class TodoList {
  constructor() {
    this.todos = [
      {
        title: "title",
        description: "description",
        status: "peding",
      },
    ];
    this.ul = document.getElementById("todo-list");
    this.addBTN = document.getElementById("add-button");
    this.divFilter = document.getElementById("add-button");
    this.removeBTN = document.getElementById("add-button");
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeCompletedTodos() {
    this.todos = this.todos.filter((todo) => todo.status !== "completed");
  }

  listTodos() {
    console.log("Todos:");
    this.todos.forEach((todo) => {
      console.log(todo);
    });
    return this.todos;
  }

  listFiltertTodo(status) {
    this.todos = this.todos.filter((todo) => todo.status === status);
  }

  writeTodosOnDisplay() {
    this.ul.innerHTML = "";
    this.todos.forEach((todo) => {
      if (!todo.description) {
      } else {
        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        console.log(typeof todo);
        console.log(todo);
        checkBox.type = "checkbox";
        checkBox.checked = todo.status === "done" ? true : false;
        li.appendChild(checkBox);

        li.appendChild(document.createTextNode(todo.description));
        li.setAttribute("id", todo.title);
        this.ul.appendChild(li);
      }
    });
  }
}

let count = 1;
const todoList = new TodoList();

todoList.writeTodosOnDisplay();

/*
const ul = document.getElementById("todo-list");
const addBTN = document.getElementById("add-button");
const divFilter = document.getElementById("add-button");
const removeBTN = document.getElementById("add-button");

addBTN.addEventListener("click", () => {
  const todo = new Todo(
    "Task-" + count,
    document.getElementById("input-field").value,
    "pending"
  );
  count++;
  todoList.addTodo(todo);
  WriteTodosOnDisplay(todoList);
});

divFilter.addEventListener("click", () => {
  if (document.getElementById("input-all").checked) {
    WriteTodosOnDisplay(todoList.listTodos());
  }
  if (document.getElementById("input-open").checked) {
    WriteTodosOnDisplay(todoList.listFiltertTodo("pending"));
  }
  if (document.getElementById("input-done").checked) {
    WriteTodosOnDisplay(todoList.listFiltertTodo("completed"));
  }
});

removeBTN.addEventListener("click", () => {
  todoList.removeCompletedTodos();
});

ul.addEventListener("change", (e) => {
  console.log(todoList.todos);

  todoList.todos.forEach((element) => {
    if (element.title === e.explicitOriginalTarget.parentElement.id) {
      if (e.explicitOriginalTarget.checked) {
        element.status = "completed";
      } else {
        element.status = "pending";
      }
    }
  });
  console.log(todoList.listFiltertTodo("completed"));
});



function WriteTodosOnDisplay(todos) {
  ul.innerHTML = "";

  console.log(todos);

  todos.forEach((todo) => {
    if (!todo.description) {
    } else {
      const li = document.createElement("li");
      const checkBox = document.createElement("input");
      console.log(typeof todo);
      console.log(todo);
      checkBox.type = "checkbox";
      checkBox.checked = todo.status === "done" ? true : false;
      li.appendChild(checkBox);

      li.appendChild(document.createTextNode(todo.description));
      li.setAttribute("id", todo.title);
      ul.appendChild(li);
    }
  });
}

*/
