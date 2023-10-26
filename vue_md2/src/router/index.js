import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import LandingComponent from "/src/components/LandingComponent.vue"
import HomeComponent from "/src/components/HomeComponent.vue"
import AboutMeComponent from "/src/components/AboutMeComponent.vue"
import store from "/src/store.js"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'Landing view'
      component: LandingComponent,
    },
    {
      path: "/home",
      name: 'Home'
      component: HomeComponent,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about-me",
      name: 'About-me'
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

const app = createApp(App);

app.use(router);

app.mount("#app");

export default router;