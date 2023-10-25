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
        <span>Oto Jauja |</span>
        <button class = "button" v-if="loggedIn" @click="toggleLogin">LOGOUT</button>
      </div>
      <button class = "button" v-if="!loggedIn" @click="toggleLogin">LOGIN</button>
    </div>
  </div>
</template>

<script>
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
    full_name() {
      return this.user.name + ' ' + this.user.surname
    },
    randomColor() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      return randomColor;
    },
  },
  methods: {
    toggleLogin() {
      if (this.loggedIn) {
        const confirmLogout = window.confirm('Do you want to log out?')
        if (confirmLogout) {
          this.$emit('loginStatus', 'logout')
        }
      } else {
        const confirmLogin = window.confirm('Do you want to log in?')
        if (confirmLogin) {
          this.$emit('loginStatus', 'login')
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
  width:auto;
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