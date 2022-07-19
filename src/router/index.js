import Vue from "vue";
import VueRouter from "vue-router";
import DefaultView from '@/views/DefaultView'
import TodoList from '@/pages/TodoList'
import CompletedList from '@/pages/CompletedList'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DefaultView",
    component: DefaultView,
    children: [
      {
        path: '',
        name: 'TodoList',
        component: TodoList
      },
      {
        path: '/completed',
        name: 'CompletedList',
        component: CompletedList
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
