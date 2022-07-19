import HTTP from "../../http-common";
// import FormGo from "../../components/FormGo";

const userStore = {
  namespaced: true,
  state: {
    todos: [],
    completes: [],
  },
  getters: {},
  mutations: {
    SET_TODOS: (state, todos) => (state.todos = todos),
    ADD_ITEM: (state, todo) => state.todos.unshift(todo),
    EDIT_TODO: (state, { title, todoId }) =>
      state.todos.forEach((todo) => {
        if (todo.id === todoId) todo.title = title;
      }),
    DELETE_TODO: (state, todoId) =>
      (state.todos = state.todos.filter(function (todo) {
        return todo.id !== todoId;
      })),
    COMPLETE_TODO: (state, todoId) =>
      state.todos.forEach((todo) => {
        if (todo.id === todoId) {
          state.completes.unshift(todo);
        }
      }),
  },
  actions: {
    async getTodos({ commit }) {
      try {
        const res = await HTTP.get("todos", {
          params: {
            _limit: 5,
          },
        });
        commit("SET_TODOS", res.data);
        commit("SET_LOADER_VALUE", false, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
    // getForm({ commit }) {

    // }
  },
};

export default userStore;
