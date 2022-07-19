<template>
  <div class="List">
    <AddTodoForm/>
    <div v-if="isLoading" class="loader"></div>
    <template v-else>
      <template v-if="todos.length">
        <h2>Todo:</h2>
        <ul>
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            :canComplete="true"
          />
        </ul>
      </template>
      <div v-else class="no-todos">The todos was not found</div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTodoForm from '@/components/AddTodoForm'
import TodoItem from '@/components/TodoItem'

export default {
  name: "TodoList",
  components: {
    TodoItem,
    AddTodoForm,
  },
  computed: {
    ...mapState("users", ["todos"]),
    ...mapState(["isLoading"]),
  },
};
</script>

<style scoped>
.List {
  margin: 0 auto;
  max-width: 400px;
}
ul {
  padding: 0;
}
.no-todos {
  border: 1px solid #000;
  padding: 20px;
  margin: 40px auto;
}
.loader {
  margin: 20px auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
