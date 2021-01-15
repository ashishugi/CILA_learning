<template>
    <div>
        <input type="text" placeholder="enter name" v-model="user.username" />
        <br/><br/>
        <input type="password" placeholder="enter password" v-model="user.password" />
        <br/><br/>
        <input type="checkbox" id="cricket" value="cricket" v-model="user.sports"/>
        <label  for="cricket">Cricket</label>
        <br/><br/>
        <input type="checkbox" id="football" value="football" v-model="user.sports"/>
        <label  for="football">Football</label>
        <br/><br/>
        <input type="radio" id="male" value="male" v-model="user.gender" />
        <label  for="male">Male</label>
        <br/><br/>
        <input type="radio" id="female" value="female" v-model="user.gender"/>
        <label  for="female">Female</label>
        <br/><br/>
        <button v-on:click="signUp">
            Sign Up
        </button>
    </div>
</template>
<script>
export default {
    name:'SignUp',
    data(){
        return {
            user:{
                username:null,
                password:null,
                sports:[],
                gender:null,
            }
        }
    },
    methods:{
        signUp(){
            console.warn(this.user);
        }
    }
}
</script>