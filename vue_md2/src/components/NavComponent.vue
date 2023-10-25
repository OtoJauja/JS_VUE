<template>
    <div v-if="loggedIn" class="button">
        <button @click="showHome" :class="{ active: currentComponent === 'home' }">HOME</button>
    </div>
    <div v-if="loggedIn" class="button">
        <button @click="showAbout" :class="{ active: currentComponent === 'about' }">ABOUT ME</button>
    </div>
</template>
  
<script>
export default {
    props: {
        loggedIn: Boolean,
    },
    data() {
        return {
            currentComponent: 'home',
        };
    },
    methods: {
        showHome() {
            this.currentComponent = 'home';
            this.$emit('changeComponent', 'home');
        },
        showAbout() {
            this.currentComponent = 'about';
            this.$emit('changeComponent', 'about');
        },
    },
};
</script>

<style>
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