import { createRouter, createWebHistory } from "vue-router";
import menuView from "../components/menu.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
    },
    {
      path: "/menu",
      name: "menuView",
      component: menuView,
    },
  ],
});

router.replace("/"); 

export default router;
