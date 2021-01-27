<template>
    <div>
        <form @submit="submit">
            <label> User Name</label>
            <input type="text" name="" v-model="form.username" placeholder="@username"/>
            <label>Full Name</label>
            <input type="text" name="" v-model="form.fullName" placeholder=""/>
            <label> Password </label>
            <input type="password" name="" v-model="form.password" placeholder="password"/>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
import {mapActions} from "vuex"; //this does is to import actions from our store to the component.
// This allows us to call the action from the component.
export default {
    name:'Register',
    data(){
        return{
            form:{
                username:null,
                password:null,
                fullName:null,
            }
        }
    },
    methods:{
        ...mapActions(['Register']),
        async submit(){
            this.Register(this.form);
            this.$router.push('/posts');
        }
    }
}
</script>