<template>
    <div>
        HI
        <table>
            <tr>
                <th>Name</th>
                <th>City Name</th>
            </tr>
            <tr v-for="x in list" v-bind:key="x">
                <td>{{x.name}}</td>
                <td>{{x.city}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios); // used to bind 
export default {
    name:'EmployeeList',
    data(){
        return{
            list:undefined
        }
    },
    mounted(){ // mounted is used when DOM gets ready
        Vue.axios.get('https://api.mocki.io/v1/b043df5a')
        .then(response=>{
            this.list=response.data;
            console.warn(response.data);
        })
    }
}
</script>