<template>
  <div>
    <HeaderComponent @loginStatus="handleLoginStatus" :loggedIn="loggedIn" />
    <div class="app-container">
      <div>
        <NavComponent :loggedIn="loggedIn" @changeComponent="changeComponent" />
      </div>
      <div class="right-column">
        <router-view v-if="loggedIn" />
      </div>
    </div>
  </div>
  <div>
    <landing-component></landing-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import LandingComponent from './components/LandingComponent.vue'

export default {
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    handleLoginStatus(status) {
      this.loggedIn = status === 'login'
    },
  },
  components: {
    HeaderComponent,
    NavComponent,
    LandingComponent,
  },
}
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: space-between;
}

.left-column {
  width: 30%;
}

.right-column {
  width: 70%;
}
</style>