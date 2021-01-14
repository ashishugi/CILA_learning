<template>
  <div id="app">
    <Navbar></Navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Button name="Subscribe"></Button>
    <Home data="Ashish"></Home>
    <div class="">
      <Button2></Button2>
    </div>
    <table>
      <tr>
        <th>S.NO</th>
        <th>Fruit Name</th>
      </tr>
      <Table></Table>
    </table>
    <Child v-bind:age="age" v-bind:vegi="vegi" name="Peter"></Child>
    <h1>{{ParentTitle}}</h1>
    <Child1 v-on:changeTitle="updateTitle($event)"></Child1>
    <h3>{{status}}</h3>
    <login v-on:login="login($event)" v-bind:status="status">{{status}}</login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import Table from "./components/Table.vue"
import Home from './components/Home.vue'
import Button2 from "./components/Button2.vue"
import Navbar from "./components/Navbar"
import Child from "./components/Child.vue"
import Child1 from "./components/Child1.vue";
import login from "./components/login";
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Button,
    Home,
    Button2,
    Table,
    Navbar,
    Child,
    Child1,
    login
  },
  data(){
    return {
      age:11,
      vegi:[
        {id:0 , name:"Brinjal"},
        {id:1 , name:"Onion"},
        {id:2 , name:"Potato"},
      ],
      ParentTitle:"THis was the Title",
      status:'login'
    }
  },
  methods:{
    updateTitle(title){
      this.ParentTitle = title
    },
    login(value){
      this.status = value;
    }
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
}
</style>
