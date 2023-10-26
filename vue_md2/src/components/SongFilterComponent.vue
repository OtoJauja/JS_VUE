<template>
  <div class="song-filter">
    <button @click="setFilter('none')" class="song-filter-button">None</button>
    <button @click="setFilter('name')" class="song-filter-button">Name</button>
    <button @click="setFilter('artist')" class="song-filter-button">Artist</button>
  </div>
</template>

<script>
import { allSongs } from "/src/store.js";

export default {
  name: "SongFilterComponent",
  data() {
    return {
      selectedFilter: "none",
    };
  },
  methods: {
    setFilter(filter) {
      this.selectedFilter = filter;
      this.$emit("filter-changed", filter);
    },
  },
};
</script>