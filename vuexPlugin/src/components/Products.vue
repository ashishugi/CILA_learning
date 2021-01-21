<template>
    <div>
        Products
        <ul>
            <li v-for="x in allProducts" v-bind:key="x.id">
                {{x.title}} | {{x.price}}
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";

export default {
    name:'Products',
    methods:{
        ...mapActions(["increment"])
    },  
    computed:mapGetters(["allProducts"]), // here there should be the name for variable used in getter of your store
    creted(){
        this.increment();
    }
}
</script>