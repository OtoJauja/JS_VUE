<template>
  <div class="about-me">
    <h2>About Me</h2>
    <form @submit="saveForm">
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
      <div class="form-group">
        <label>Logged in at</label>
        <ul>
          <li v-for="timestamp in user.loggedAtTimestamps" :key="timestamp">{{ timestamp }}</li>
        </ul>
      </div>
      <button type="submit" class="edit-form-button">{{ isEditFormButtonActive ? "CANCEL" : "EDIT FORM" }}</button>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";
import { updateUser } from "/src/store.js";


export default {
  name: "AboutMeComponent",
  computed: {
    user() {
      return updateUser.state.user;
    },
    isEditFormButtonActive() {
      return this.$root.isEditFormButtonActive;
    },
  },
  methods: {
    saveForm() {
      store.dispatch("updateUser", this.user);
      this.$root.isEditFormButtonActive = false;
    },
  },
};
</script>