<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import ListGo from "@/components/ListGo.vue";
import FormGo from "@/components/AddTodoForm.vue";
import { mapActions } from "vuex";
// import HTTP from "../http-common";

export default {
  name: "AppVue",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
