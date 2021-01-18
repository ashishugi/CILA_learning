<template>
  <div id="app">
    this
    <Home></Home>
    <EmployeeList></EmployeeList>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import EmployeeList from "./components/EmployeeList.vue";
export default {
  name: 'App',
  components: {
    Home,
    EmployeeList
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
