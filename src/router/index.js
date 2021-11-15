
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: "/profile/:nickname",
    name: "Profile",
    component: () => import('../views/Profile.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: "/profile/:nickname",
      name: "Profile",
      props: true,
      component: () => import('../views/Profile.vue'),
    }
  ]
});
*/
