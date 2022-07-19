// <template>
//   <div class="List">
//     <template v-if="todos.length">
//       <h2>Todo:</h2>
//       <ul>
//         <ItemLi
//           v-for="todo in todos"
//           :key="todo.id"
//           :todo="todo"
//           :canComplete="true"
//         />
//       </ul>
//     </template>
//     <template v-if="completes.length">
//       <h2>Complete:</h2>
//       <ul>
//         <ItemLi
//           v-for="complete in completes"
//           :key="complete.id"
//           :todo="complete"
//           :canComplete="false"
//         />
//       </ul>
//     </template>
//   </div>
// </template>

// <script>
// import ItemLi from "../components/ItemLi.vue";
// import { mapState } from "vuex";

// export default {
//   name: "ListGo",
//   components: {
//     ItemLi,
//   },
//   computed: {
//     ...mapState("users", ["todos"]),
//     ...mapState("users", ["completes"]),
//   },
// };
// </script>

// <style scoped>
// .List {
//   margin: 0 auto;
//   max-width: 400px;
// }
// ul {
//   padding: 0;
// }
// </style>
