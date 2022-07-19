<template>
  <div class="List">
    <template v-if="completes.length">
      <h2>Complete:</h2>
      <ul>
        <TodoItem
          v-for="complete in completes"
          :key="complete.id"
          :todo="complete"
          :canComplete="false"
        />
      </ul>
    </template>
    <div v-else class="no-completes">The completes was not found</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from '@/components/TodoItem'

export default {
  name: "CompletedList",
  components: {
    TodoItem,
  },
  computed: {
    ...mapState("users", ["completes"]),
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
.no-completes {
  border: 1px solid #000;
  padding: 20px;
  margin: 40px auto;
}
</style>
