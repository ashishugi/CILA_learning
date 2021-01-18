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
    beforeCreated(){
        console.log("Before is called");
        console.log(this.$el);
    },
    created(){
        console.log("Created Function is called");
        console.log(this.$el);
    },
    methods:{
        login(){
            console.warn(this.user)
        },
    }
}
</script>