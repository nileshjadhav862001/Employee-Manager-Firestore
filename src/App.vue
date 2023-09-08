<template>
  <div id="app">
    <NavbarComp/>
    <div class="container">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
// import HelloWorld from './components/HelloWorld.vue' 

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavbarComp
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>