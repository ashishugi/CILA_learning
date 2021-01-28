<template>
    <div class="nav">
        <ul style="list-style:none">    
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/posts">Posts</router-link></li>
        <li>
            <span v-if="isLoggedIn">
                <a @click="logout">Logout</a>
            </span>
            <span v-else>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
            </span>
        </li>
        </ul>
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