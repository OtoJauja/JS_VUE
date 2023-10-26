import { createRouter, createWebHistory } from "vue-router";
import LandingComponent from "./components/LandingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
import store from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LandingComponent,
    },
    {
      path: "/home",
      component: HomeComponent,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about-me",
      component: AboutMeComponent,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.loggedInStatus) {
    next("/");
  } else {
    next();
  }
});

export default router;