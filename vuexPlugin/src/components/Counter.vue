<template>
    <div>
        <h1>{{counter}}</h1>
        <button @click="increment">Add</button>
        <button @click="decrement">Sub</button>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
// mapGetter will take your variables from your storage to component page
// mapActions takes you action functions to component page
export default {
    name:'Counter',
    methods:{
        ...mapActions(["increment","decrement"])
    },
    computed:mapGetters(["counter"])

}
</script>