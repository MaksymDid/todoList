<template>
  <div>
    <nav>
      <router-link :to="{name: 'TodoList'}">Todo</router-link> |
      <router-link :to="{name: 'CompletedList'}">Complete</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'DefaultView',
  async created() {
    await this.getTodos();
  },
  methods: {
    ...mapActions("users", ["getTodos"]),
  },
}
</script>

<style scoped lang='scss'>
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