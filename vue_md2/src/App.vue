<template>
  <div>
    <HeaderComponent/>

    <NavComponent v-if="user.loggedInStatus" />

    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavComponent, { createRouter, createWebHistory } from
 
"vue-router";
import routes from
 
"./router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  components: {
    HeaderComponent,
    NavComponent,
  },
  data() {
    return {
      user: {
        loggedInStatus: false,
      },
    };
  },
  router,
};
</script>