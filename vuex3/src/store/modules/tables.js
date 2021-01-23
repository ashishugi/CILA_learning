const state = {
    contents:[
        {
            id:1,
            name:'Adikshit'
        },
        {
            id:2,
            name:'Kuldeep'
        },
        {
            id:3,
            name:'mixer'
        },
        {
            id:4,
            name:'Boat'
        },
    ]
}
const getters = {
    contents:state=>state.contents
}
const actions={
    add({commit}){
        state.contents.push({
            id:4,
            name:'Boat'
        });
        commit("add",state.contents);
    },
    remove({commit}){
        state.contents.pop();
        commit("remove",state.contents);
    }
}
const mutations={
    add:(state,contents)=>{state.contents = contents},
    remove:(state,contents)=>{state.contents =contents}
}
export default{
    state,
    getters,
    actions,
    mutations
}