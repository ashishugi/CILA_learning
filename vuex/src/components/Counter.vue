<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="increase"> click </button>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({  
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count = state.count++;
        }
    }
})
export default {
    name:'Counter',
    computed:{
        count () {
            return store.state.count;
        }
    },
    methods:{
        increment(){
            store.commit('increment');
            // console.log(store.state.count);
        }
    }
}

</script>