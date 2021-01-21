import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/products"
import counter from "./modules/counter";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    counter
  }
})
