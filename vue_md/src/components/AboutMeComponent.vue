<template>
    <div class="text">
        <h1>ABOUT ME</h1>
        <h3>Name: {{ user.name }}</h3>
        <h3>Surname: {{ user.surname }}</h3>
        <h3>ViA Code: {{ user.code }}</h3>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            user: {
                name: "Oto",
                surname: "Jauja",
                code: "IT21038",
            },
        };
    },
};
</script>

<style>
.text {
    color: azure;
    font: bold;
}
</style>