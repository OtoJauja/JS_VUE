import { createRouter, createWebHistory } from "vue-router";
import LandingComponent from "./components/LandingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
import store from "/src/store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Landing view",
      component: LandingComponent,
    },
    {
      path: "/home",
      name: "Home",
      component: HomeComponent,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about-me",
      name: "About me",
      component: AboutMeComponent,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;