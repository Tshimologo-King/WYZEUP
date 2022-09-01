import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Podcasts from "../views/Podcasts.vue";
import AboutView from "../views/Careers.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import adminDashboard from "../components/adminDashboard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Careers",
    name: "career",
    component: () => import("../views/Careers.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/adminDashboard",
    name: "adminDashboard",
    component: () => import("../components/adminDashboard.vue"),
  },
  {
    path: "/Podcasts",
    name: "podcasts",
    component: () => import("../views/Podcasts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
