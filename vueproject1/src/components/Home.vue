<template>
    <div>
        <h1>this is Home component</h1>
        <h2>{{data}}</h2>
        <button v-on:click="hello">CLIck </button>
    </div>
    
</template>
<script>
export default {
    name:'Home',
    props:{
        data:String 
    },
    methods:{
        hello : function(){
            alert("hello");
        }
    },
    data(){
        return {
            
        }
    }
}
</script>