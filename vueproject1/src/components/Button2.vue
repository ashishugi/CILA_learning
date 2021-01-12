<template>
    <div>
        <h3 v-if="flag">This is a toggling element if condition</h3>
        <h3 v-else>This is a toggling element else condition</h3>
        <span v-for="x in cars" v-bind:key="x">
            {{x}}
        </span>
        <button class="btn" v-on:click="toogle">
            Toogle
        </button>
    </div>
</template>
<script>
export default {
    name:'Button2',
    props:{
        name:String
    },
    data(){
        return {
            flag :true,
            cars:[
                "Tata","Ford","Toyota","BMW"
            ]
        }
    },
    methods:{
        toogle : function(){
           this.flag = this.flag ? false:true;
        }
    }
}
</script>
<style scoped>
    .btn{
        color:black;
        background-color:#e6c717;
        padding : 10px 30px;
        border:0.5px solid black;
        border-radius:5px;
        font-size:18px;
    }
</style>