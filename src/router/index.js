import { createRouter, createWebHistory } from "vue-router";
import Clients from "../views/Clients.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Clients",
      name: "Clients",
      component: Clients,
    },
    {
      path: "/",
      name: "Products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/List",
      name: "List",
      component: () => import("../views/List.vue"),
    },
  ],
});

export default router;
