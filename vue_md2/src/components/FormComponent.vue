<template>
  <div class="form-component">
    <div class="form-group">
      <label>First name</label>
      <input type="text" v-model="user.firstName" :disabled="isEditFormButtonActive">
    </div>
    <div class="form-group">
      <label>Last name</label>
      <input type="text" v-model="user.lastName" :disabled="isEditFormButtonActive">
    </div>
    <div class="form-group">
      <label>Student code</label>
      <input type="text" v-model="user.studentCode" :disabled="isEditFormButtonActive">
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { store } from "/src/store.js";

export default {
  name: "FormComponent",
  computed: {
    user() {
      return store.state.user;
    },
    isEditFormButtonActive() {
      return this.$root.isEditFormButtonActive;
    },
  },
};
</script>