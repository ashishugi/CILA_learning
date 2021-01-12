<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Button name="Subscribe"></Button>
    <Home data="Ashish"></Home>
    <div class="">
      <Button2></Button2>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import Home from './components/Home.vue'
import Button2 from "./components/Button2.vue"
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Button,
    Home,
    Button2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
