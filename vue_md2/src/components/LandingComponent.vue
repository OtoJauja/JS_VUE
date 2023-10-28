<template>
  <div class="landing-component">
    <div class="text-container">
      <h1>WE</h1>
      <h1 class="love">LOVE</h1>
      <h1>MUSIC</h1>
      <p> POWERED BY <span style="color:#67FF64;">SPOTIFY API</span></p>
    </div>
  </div>
</template>
  
<script>

export default {
    name: 'LandingComponent',
}
</script>
  
<style>
.landing-component {
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: justify;
  top: 246px;
  left: 101px;
  flex-direction: column;
}


.text-container {
  width: 433px;
  height: 489px;
}

h1 {
  font-size: 128px;
  font-weight: bold;
  color: #ffffff;
}

p {
  font-size: 20px;
  color: #666666;
  font-weight: bold;
}

.love {
  color: #FB0048;
}
</style>