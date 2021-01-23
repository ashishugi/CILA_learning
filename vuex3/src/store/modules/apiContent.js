import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
const state={
    apiContents:null
}
const getters={
    apiContents:state=>state.apiContents
}
const actions={
    fetch({commit}){
        Vue.axios.get('https://api.mocki.io/v1/b043df5a')
            .then(response=>{
                state.apiContents =response.data;
                console.log('here');
                console.log(response.data);
            })
        commit('fetch',state.apiContents);
    }
}
const mutations={
    fetch:(state,apiContents)=>{state.apiContents = apiContents}
}
export default{
    state,
    actions,
    getters,
    mutations
}