<template>
  <div id="app">
    hi
    <Products></Products>
    <Counter></Counter>
  </div>
</template>

<script>
import Products from "./components/Products";
import Counter from "./components/Counter"
export default {
  name: 'App',
  components: {
    Products,
    Counter
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
