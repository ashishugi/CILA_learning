const state={
    products:[]
};
const getters = { // used to compute / access the data
    // this will store the products data into store
    allProducts2: state => state.products
};
const actions = {};
const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
}