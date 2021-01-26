<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Posts</router-link>
        <span v-if="isLoggedIn">
            <a @click="logout">Logout</a>
        </span>
        <span v-else>
            <router-link to="/register">Register</router-link>
            <router-link to="/login">Login</router-link>
        </span>
        <router-link to="/">Home</router-link>
        <router-link to="/">Home</router-link>
    </div>
</template>
<script>
// import {mapGetters,mapActions} from "vue"
export default {
    name:'Navbar',
    computed:{
        isLoggedIn:function(){
            return this.$store.getters.isAuthenticated; // this will take the value from store
        }
    },
    methods:{
        async logout(){
            await this.$store.dispatch('LogOut'); // this will call actions logout at auth.js page
            this.$router.push('/login'); // this will redirect to login page 
        }   
    }
}
</script>