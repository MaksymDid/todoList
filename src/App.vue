<template>
  <div id="app">
    <nav>
      <router-link to="/">Todo</router-link> |
      <router-link to="/complete">Complete</router-link>
    </nav>
    <FormGo />
    <!-- <ListGo /> -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import ListGo from "@/components/ListGo.vue";
import FormGo from "@/components/FormGo.vue";
import { mapActions } from "vuex";
// import HTTP from "../http-common";

export default {
  name: "HomeView",
  components: {
    // ListGo,
    FormGo,
  },
  async created() {
    await this.getTodos();
  },
  methods: {
    ...mapActions("users", ["getTodos"]),
  },
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
