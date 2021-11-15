import { createRouter, createWebHashHistory } from "vue-router";



const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home'),
  },
  {
    path: "/profile",
    name: "Profile",
    props: true,
    component: () => import('../views/Profile.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
