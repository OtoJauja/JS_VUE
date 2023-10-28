<template>
    <div id="main-header" class="active">
      <div class="wrapper-logo">
        <img src="@/assets/logo (white).svg" />
        <h2>KRAKEN.FM</h2>
      </div>
      <div class="wrapper-profile">
        <div class="section-user">
          <span class="avatar"></span>
          <h3>{{ fullName }}</h3>
        </div>
        <button @click="handleLogout()">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import store from "/src/store.js";
  
  export default {
    name: "HeaderComponent",
    
    computed: {
      user() {
        return store.state.user;
      },
      fullName() {
        return `${this.user.firstName} ${this.user.lastName}`;
      },
      buttonText() {
        return this.user.loggedInStatus ? "LOGOUT" : "LOGIN";
      },
    },
    methods: {
      handleLogout() {
        const confirmLogout = window.confirm("Do you want to log out?");
        if (confirmLogout) {
          store.dispatch("resetUser");
        }
      },
    },
  };
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