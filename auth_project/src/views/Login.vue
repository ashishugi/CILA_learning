<template>
    <div>
        <form @submit="submit">
            <label>Username</label>
            <input v-model="form.username" type="text" placeholder="username"/>
            <label>Password</label>
            <input v-model="form.password" type="password" placeholder="password"/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
    name:'Login',
    data(){
        return{
            form:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        ...mapActions(["LogIn"]),
        async submit(){
            const User = new FormData();
            User.append("username", this.form.username);
            User.append("password", this.form.password);
            await this.LogIn(User);
            this.$router.push('/posts');
            this.$router.push("/posts");
        }
    }
}
</script>