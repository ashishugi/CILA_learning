<template>
  <div id="app">
    <EmployeeList></EmployeeList>
    <Bootstrap></Bootstrap>
    <Post></Post>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import EmployeeList from "./components/EmployeeList.vue";
import Bootstrap from "./components/Bootstrap.vue";
import Post from "./components/Post"
export default {
  name: 'App',
  components: {
    EmployeeList,
    Bootstrap,
    Post
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
