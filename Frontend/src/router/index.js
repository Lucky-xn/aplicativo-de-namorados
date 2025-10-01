import { createWebHistory, createRouter } from "vue-router";

// import Teste from "../components/Teste.vue";
import Home from "../views/HomeView.vue";
import SelectImagensView from "../views/SelectImagensView.vue";
import Apresentation from "../components/Apresentation.vue";

const routes = [
  {path: "/Home", component: Home},
  {path: "/Select/Imagens", component: SelectImagensView},
  {path: "/Apresentation", component: Apresentation},
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;