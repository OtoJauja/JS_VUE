<template>
    <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/about-me">About Me</router-link>
        <router-link to="/" v-if="store.user.isLoggedIn">Logout</router-link>
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
}
button {
    background-color: rgb(157, 0, 248);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 90px;
}

button:hover {
    background-color: #360074;
}

.active {
    background-color: rgb(157, 0, 248);
}
</style>