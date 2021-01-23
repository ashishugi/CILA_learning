<template>
    <div>
        this is for the api content
        {{apiContents}}
        <button @click="fetch">Fetch</button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name:'ApiContents',
    methods:{
        ...mapActions(["fetch"])
    },
    computed:{
        ...mapGetters(["apiContents"])
    }
}
</script>