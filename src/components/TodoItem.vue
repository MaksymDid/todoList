<template>
  <div>
    <li>
      <div v-if="!canComplete">
        {{ todo.title }}
      </div>
      <div v-else-if="!editing" @dblclick="clickOn">
        {{ todo.title }}
      </div>
      <input
        v-if="editing"
        @blur="clickOn"
        type="text"
        :value="todo.title"
        @change="onChange($event, todo.id)"
      />
      <button v-if="canComplete" @click="complete(todo.id)">Complete</button>
    </li>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    canComplete: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    editing: false,
  }),
  methods: {
    ...mapMutations("users", ["EDIT_TODO"]),
    ...mapMutations("users", ["DELETE_TODO"]),
    ...mapMutations("users", ["COMPLETE_TODO"]),
    clickOn() {
      this.editing = !this.editing;
    },
    onChange(e, todoId) {
      const todoData = {
        title: e.target.value,
        todoId,
      };
      this.EDIT_TODO(todoData);
    },
    complete(todoId) {
      this.COMPLETE_TODO(todoId);
      this.DELETE_TODO(todoId);
    },
  },
};
</script>

<style scoped>
li {
  background: rgba(255, 247, 128, 0.384);
  display: block;
  border: 1px solid #000;
  padding: 10px 5px;
  margin: 10px 0;
  display: flex;
  text-align: left;
  justify-content: space-between;
}
</style>
