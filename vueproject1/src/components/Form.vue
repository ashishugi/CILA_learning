<template>
    <div>
        <form>
            <SignUp></SignUp>
        </form>
    </div>
</template>

<script>
import SignUp from "./SignUp.vue"
export default {
    name:'form',
    components:{
        SignUp
    }
}
</script>