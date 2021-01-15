<template>
    <div>
        <input type="text" placeholder="name" v-model="signup.username"/>
        <br/><br/>
        <input type="password" placeholder="" v-model="signup.password"/>
        <br/><br/>
        <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies">
        <label for="cricket">Cricket</label>
        <br/><br/>
        <input type="checkbox" id="basketball" v-model="signup.hobbies" value="basketball">
        <label for="basketball">Basketball</label>
        <br/><br/>
        <input type="radio" id="male" value="male" v-model="signup.gender">
        <label for=male>Male</label>
        <br/><br/>
        <input type="radio" id="female" value="female" v-model="signup.gender">
        <label for="female">Female</label>

        <br/><br/>
        <button v-on:click="signupUser">Sign Up</button>
    </div>
</template>
<script>
export default {
    name:'SignUp',
    data(){
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        signupUser(){
            console.warn(this.signup);
        }
    }
}
</script>