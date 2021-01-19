<template>
    <div>
        <h1>Post Form</h1>
        <form @submit="submitData" method="post">
            <input type="text" placeholder="title" name="title" v-model="post.title"/>
            <br/><br/>
            <input type="text" placeholder="author" name="author" v-model="post.author"/>
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios); // for binding
export default {
    name:'Post',
    data(){
        return {
           post:{
                title:null,
                  author:null 
           }
        }
    },
    methods:{
        submitData(event){
            this.axios.post('http://localhost:8080/post',this.post)
            .then(response=>{
                console.warn(response);
            }); // two parameter  (url from where data will post , data)
            console.warn(this.post);
            event.preventDefault();
        }
    }
}
</script>