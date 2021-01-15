<template>
    <div>
        <input type="text" v-model="user.username" name="username" placeholder="@username"/>
        <br/><br/>
        <input type="password" v-model="user.password" name="password" placeholder="password"/>
        <br/><br/>
        <button v-on:click="login" >Log In</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return {
           user:{
                username:null,
                password:null
           }
        }
    },
    methods:{
        login(){
            console.warn(this.user)
        }
    }
}
</script>