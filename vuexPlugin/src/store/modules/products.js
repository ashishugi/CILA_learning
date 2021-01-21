const state={
    products:[
        {
            id:1,
            title:'product 1',
            price:"300"
        },
        {
            id:2,
            title:'product 2',
            price:"400"
        }
    ]
};
const getters = { // used to compute / access the data
    // this will store the products data into store
    allProducts: state => state.products
};
const actions = {};
const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
}