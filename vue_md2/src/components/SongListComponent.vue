<template>
  <div class="song-list">
    <SongFilterComponent @filter-changed="setFilter" />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in filteredSongs" :key="song.id">
          <td>{{ song.name }}</td>
          <td>{{ song.artist }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { allSongs } from "/src/store";
import SongFilterComponent from "/src/components/SongFilterComponent.vue";

export default {
  name: "SongListComponent",
  components: {
    SongFilterComponent,
  },
  computed: {
    filteredSongs() {
      const filter = this.filter;
      if (filter === "none") {
        return allSongs;
      } else if (filter === "name") {
        return allSongs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === "artist") {
        return allSongs.sort((a, b) => a.artist.localeCompare(b.artist));
      }
    },
    filter() {
      return this.$root.songFilter;
    },
  },
};
</script>