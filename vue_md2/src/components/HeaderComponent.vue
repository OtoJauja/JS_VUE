<template>
  <div class="header" :class="{ 'header-logged-in': loggedIn }">
    <div class="left-section">
      <img src="@/assets/logo (white).svg" alt="Logo" height="60" width="60" />
    </div>
    <div class="right-section">
      <div class="user-info" v-if="loggedIn">
        <div class="avatar" :style="{ backgroundColor: randomColor }">
          {{ user.full_name }}
        </div>
        <span v-if="user.loggedInStatus">| {{ fullName }}</span>
        <button @click="loginLogout">{{ loginLogoutText }}</button>
      </div>
    </div>
  </div>
</template>

<script>

import store from "/src/store.js";

export default {
  props: {
    loggedIn: Boolean,
  },
  data() {
    return {
      user: {
        name: 'Oto',
        surname: 'jauja',
        code: 'IT21038',
      },
      avatarColor: '#f0c10f',
    }
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
.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  text-align: right;
  align-items: center;
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  background-color: rgb(49, 39, 59);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 1848px;
}

.header-logged-in {
  background-color: rgb(157, 0, 248);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.login-logout-button {
  text-align: right;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

button {
  background-color: #252525;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #5a5a5a;
}

.navigation-button.active {
  font-weight: bold;
}
</style>