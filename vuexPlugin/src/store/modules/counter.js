
const state={
    count:0
}
const getters={
    counter:state => state.count
}
const actions = {
    increment({commit}){
       commit("increment",state.count+1);
    },
    decrement({commit}){
        commit('decrement',state.count-1);
    }
};
// mutation function is responsible for 
const mutations = {
    increment:(state,count) => { state.count = count },
    decrement:(state,count) => {state.count = count}
};

export default{
    state,
    getters,
    actions,
    mutations
}