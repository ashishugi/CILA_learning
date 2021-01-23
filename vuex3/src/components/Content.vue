<template>
    <div>
        <ol>
            <li v-for="content in contents" v-bind:key="content.id">
                {{content.name}}
            </li>
        </ol>
        <button @click="add">Add</button> &nbsp;
        <button @click="remove">Delete</button>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name:'Content',
    methods:{
        ...mapActions(["add","remove"]),


    },
    computed:{
        ...mapGetters(["contents"])
    }

}
</script>