import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';


Vue.config.productionTip = false
axios.defaults.withCredentials = true ; // this is done to save the cookies received from the API through the axios
axios.defaults.baseURL = 'https://localhost:8080/'; // this is for requesting and making the response to api
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
