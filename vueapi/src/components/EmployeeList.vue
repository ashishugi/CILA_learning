<template>
    <div>
        <h1>Employee List</h1>
    </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios); // to bind
export default {
    name:'EmployeeList',
    mounted(){
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response=>{
            console.warn(response);
        })
    }
}
</script>