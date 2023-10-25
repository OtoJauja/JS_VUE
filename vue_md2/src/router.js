import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingComponent from './components/LandingComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingComponent },
  {
    path: '/home',
    component: HomeComponent,
    beforeEnter: (to, from, next) => {
      if (Vue.prototype.$store.state.user.logged_in) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
    beforeEnter: (to, from, next) => {
      if (Vue.prototype.$store.state.user.logged_in) {
        next();
      } else {
        next('/');
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;