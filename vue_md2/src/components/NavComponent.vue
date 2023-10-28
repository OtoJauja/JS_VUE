<template>
    <nav>
        <router-link to="/home">HOME</router-link>
        <router-link to="/about-me">ABOUT ME</router-link>
    </nav>
</template>
  
<script>
export default {
  name: "NavComponent",
};
</script>

<style>
.router-link.active {
  font-weight: bold;
  color: #5c00c6;
}

</style>