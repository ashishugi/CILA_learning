<template>
    <a href="https://www.google.com" target="_blank" >
        <button class="btn" >
        {{name}}
    </button>
    </a>
</template>
<script>
export default {
    name:'Button',
    props:{
        name:String
    },
}
</script>
<style scoped>
    .btn{
        color:white;
        background-color: rgb(14, 63, 168);
        padding : 10px 30px;
        border:0px;
        border-radius:10px;
        font-size:18px;
    }
</style>