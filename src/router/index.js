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
