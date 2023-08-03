<template>
  <div>
    <div>
      <input type="text" v-model="newTodoDescription" />
      <button @click="addTodo">Add Todo</button>
    </div>
    <div v-for="todo in filteredTodos" :key="todo.id">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodoStatus(todo)"
      />
      <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">{{
        todo.description
      }}</span>
    </div>
    <div>
      <button @click="filterTodos('all')">All</button>
      <button @click="filterTodos('open')">Open</button>
      <button @click="filterTodos('done')">Done</button>
      <button @click="deleteDoneTodos">Remove Done Todos</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "../store/todoStore";

const todoStore = useTodoStore();

const newTodoDescription = ref("");
const filterType = ref("all");

const filteredTodos = computed(() => {
  if (filterType.value === "all") {
    return todoStore.todos;
  } else if (filterType.value === "open") {
    return todoStore.incompleteTodos;
  } else if (filterType.value === "done") {
    return todoStore.completedTodos;
  }
  return [];
});

function addTodo() {
  const newTodo = {
    id: Date.now(),
    description: newTodoDescription.value,
    done: false,
  };
  todoStore.addTodo(newTodo);
  newTodoDescription.value = "";
}

function toggleTodoStatus(todo) {
  todoStore.updateTodoStatus({
    todoId: todo.id,
    done: !todo.done,
  });
}

function filterTodos(type) {
  filterType.value = type;
}

function deleteDoneTodos() {
  const doneTodoIds = todoStore.completedTodos.map((todo) => todo.id);
  doneTodoIds.forEach((id) => {
    todoStore.deleteTodo(id);
  });
}
</script>
