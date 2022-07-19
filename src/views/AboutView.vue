<template>
  <div class="List">
    <template v-if="completes.length">
      <h2>Complete:</h2>
      <ul>
        <ItemLi
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
import ItemLi from "../components/ItemLi.vue";
import { mapState } from "vuex";

export default {
  name: "ListGo",
  components: {
    ItemLi,
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
