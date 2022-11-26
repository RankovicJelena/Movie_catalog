import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import DetailPage from "@/views/DetailPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: DetailPage },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
