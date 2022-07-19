<template>
  <div>
    <div>
      <div class="form">
        <input type="text" @keyup.enter="goForm" v-model="input" />
        <button @click.prevent="goForm">Sumbit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddTodoForm",
  data: () => ({
    input: "",
    goInput: "",
  }),
  methods: {
    ...mapMutations("users", ["ADD_ITEM"]),
    goForm() {
      const item = {
        id: Date.now(),
        title: this.input,
        completed: false,
      };
      if (item.title.length) {
        this.ADD_ITEM(item);
      }
      this.input = "";
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 300px;
  background: #0094f746;
  padding: 50px;
  border-radius: 5px;
}
.form input {
  margin-bottom: 10px;
}
</style>
