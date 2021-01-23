<template>
  <div id="app">
    hi
    <Content></Content>
    <ApiContents></ApiContents>
  </div>
</template>

<script>
import Content from "./components/Content.vue"
import ApiContents from "./components/ApiContents";
export default {
  name: 'App',
  components: {
    Content,
    ApiContents
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
