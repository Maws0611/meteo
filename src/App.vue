<template>
  <div id="app">
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
 
  
}
</style>
