<template>
  <header class="header">
    <img src="/src/assets/logo (white).svg" alt="Logo" class="header__logo">
    <h1 class="header__title">KRAKEN.FM</h1>
    <b-avatar :style="{ backgroundColor: randomColor }"></b-avatar>
    <span v-if="user.loggedInStatus">| {{ fullName }}</span>
    <button  class="header__login-button" @click="loginLogout">{{ loginLogoutText }}</button>
  </header>
</template>

<script>

import store from "/src/store.js";
import HeaderComponent from '/src/components/HeaderComponent.vue'

export default {
  name: "HeaderComponent",
  components: {
    HeaderComponent,
  },
  computed: {
    user() {
      return store.state.user;
    },
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    loginLogoutText() {
      return this.user.loggedInStatus ? "LOGOUT" : "LOGIN";
    },
    randomColor() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      return randomColor;
    },
  },
  methods: {
    loginLogout() {
      if (this.user.loggedInStatus) {
        const confirmLogout = window.confirm("Do you want to log out?");
        if (confirmLogout) {
          store.dispatch("resetUser");
        }
      } else {
        const confirmLogin = window.confirm("Do you want to log in?");
        if (confirmLogin) {
          store.dispatch("login");
        }
      }
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.header__logo {
  width: 50px;
  height: 50px;
}

.header__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.header__login-button {
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>