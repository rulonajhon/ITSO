import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import { auth } from "@/firebase";

const routes = [
  { path: "/landing", component: LandingPage },
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  {
    path: "/home",
    component: Home,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    if (to.meta.requiresAuth && !user) {
      next("/login");
    } else {
      next();
    }
  });
});

export default router;
