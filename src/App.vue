<template>
  <div id="app" class="w-100 m-auto">
        <h1 class=" text-center text-light">App météo avec vue.js</h1>
    <meteoApp></meteoApp>
  </div>
</template>

<script>
import MeteoApp from './components/MeteoApp'

export default {
  name: 'App',
  components: {
    'meteoApp' : MeteoApp
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('./assets/weather.jpg');
  width: 100%;
}

</style>

<!-- background: #43c6ac;
  background: linear-gradient(to right, #f8ffae, #43c6ac) -->