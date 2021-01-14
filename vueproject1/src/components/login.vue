<template>
    <div>
        <button v-on:click="login">
            {{status}}
        </button>
    </div>
</template>
<script>
export default {
    name:'login',
    props:{
        status:String
    },
    methods:{
        login : function(){
            this.$emit('login',"Sign Out");
        }
    }
}
</script>