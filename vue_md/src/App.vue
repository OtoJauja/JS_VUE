<template>
  <div>
    <HeaderComponent @loginStatus="handleLoginStatus" :loggedIn="loggedIn" />
  </div>
  <div class="app-container">
    <div class="left-column">
      <NavigationComponent :loggedIn="loggedIn" @changeComponent="changeComponent" />
    </div>
    <div class="right-column">
      <div class="content">
        <HomeComponent v-if="loggedIn && currentComponent === 'home'" />
        <AboutMeComponent v-if="loggedIn && currentComponent === 'about'" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'

export default {
  data() {
    return {
      currentComponent: 'home',
      loggedIn: false,
    }
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component
    },
    handleLoginStatus(status) {
      this.loggedIn = status === 'login'
    },
  },
  components: {
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
  },
}
</script>

<style scoped>
.content {
  flex: 1;
}

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