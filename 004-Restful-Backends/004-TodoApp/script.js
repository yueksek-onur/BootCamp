"use strict";

let todo = {};

const ul = document.getElementById("todo-list");
const addBTN = document.getElementById("add-button");
const divFilter = document.getElementById("div-filter");
const removeBTN = document.getElementById("remove-button");
const inputfield = document.getElementById("input-field");

addBTN.addEventListener("click", () => {});

divFilter.addEventListener("click", () => {
  if (document.getElementById("input-all").checked) {
    // API Get
  }
  if (document.getElementById("input-open").checked) {
    // API Get =>   done: false,
  }
  if (document.getElementById("input-done").checked) {
    // API Get =>   done: true,
  }
});

removeBTN.addEventListener("click", () => {
  // API Del done: true
});

function renderTodos() {}
