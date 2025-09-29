import { createWebHistory, createRouter } from "vue-router";

// import Teste from "../components/Teste.vue";
import Home from "../views/Home.vue";

const routes = [
  {path: "/Home", component: Home}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;