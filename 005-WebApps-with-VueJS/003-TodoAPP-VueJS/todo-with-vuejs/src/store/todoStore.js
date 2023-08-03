import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    updateTodoStatus(payload) {
      const { todoId, done } = payload;
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.done = done;
      }
    },
  },
  getters: {
    completedTodos() {
      return this.todos.filter((todo) => todo.done);
    },
    incompleteTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
  },
});
