<template>
  <div id="app">
    <h1>Login 1</h1>
    <Login1></Login1>
    <h1>Login </h1>
    <SignUp></SignUp>
    <h1>Fill the form Below</h1>
    <Login></Login>
    <h3>{{value | Ucase}}</h3> <!-- this is how we use filter -->
    <!-- Ucase is a filter made in main.js  -->
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp";
import Login1 from "./components/Login1"
export default {
  name: 'App',
  components: {
    SignUp,
    Login,
    Login1
  },
  data(){
    return {
      value:"ashish"
    }
  }
}
</script>
    HelloWorld

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
