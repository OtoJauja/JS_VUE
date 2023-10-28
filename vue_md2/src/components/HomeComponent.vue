<template>
  <div>
    <h2>HOME</h2>
    <SongListComponent />
  </div>
</template>

<script>
import SongListComponent from "/src/components/SongListComponent.vue";

export default {
  components: {
    SongListComponent,
},
};
</script>