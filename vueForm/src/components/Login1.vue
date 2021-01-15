<template>
    <div>
        <p v-if="error.length > 0">
            <ul v-for="x in error" v-bind:key="x">
                <li>{{x}}</li>
            </ul>
        </p>
        <p>
            {{amount | Currency}}
            <!-- Currency is a filter -->
        </p>
        <form @submit="login">
            <input name="username" v-model="user.username" type="text" placeholder="username"/>
            <br/><br/>
            <input name="" type="password" v-model="user.password"  placeholder="password"/>
            <br/><br/>
            <button >Login</button>
            <br/><br/>
        </form>
    </div>
</template>
<script>
export default {
    name:'Login1',
    data(){
        return {
            amount:100,
            user:{
                username:null,
                password:null,
            },
            error:[],
        }
    },
    methods:{
        login(event){
            this.error=[]; // every time it clicks login then error must be empty
            if(this.user.username  && this.user.password){
                console.log("No error");
            }
            if(!this.user.username){
                this.error.push("user name required");
            }
            if(!this.user.password){
                this.error.push("password is required");
            }
            console.warn(this.error);
            event.preventDefault(); // stops reloading while submit the form
        }
    }
}
</script>