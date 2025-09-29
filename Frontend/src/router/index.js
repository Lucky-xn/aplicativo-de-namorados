import { createWebHistory, createRouter } from "vue-router";

// import Teste from "../components/Teste.vue";
import Home from "../views/HomeView.vue";
import SelectImagensView from "../views/SelectImagensView.vue";

const routes = [
  {path: "/Home", component: Home},
  {path: "/Select/Imagens", component: SelectImagensView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;