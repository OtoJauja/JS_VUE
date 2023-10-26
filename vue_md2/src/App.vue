<template>
  <div>
    <HeaderComponent />
    <AboutMeComponent />
    <FormComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import store from "/src/store.js";

export default {
  components: {
    HeaderComponent,
    AboutMeComponent,
    FormComponent,
  },
  data() {
    return {
      isEditFormButtonActive: false,
    };
  },
};
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