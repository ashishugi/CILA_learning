import Vue from 'vue'
import App from './App.vue'
import store from './store';
import axios from 'axios';
import router from "./routes"
// import VueRouter from "vue-router";
// import Home from "./views/Home.vue";
// import Register from "./views/Register.vue";
// import Login from "./views/Login.vue";
// import Posts from "./views/Posts.vue";

// Vue.use(VueRouter);
// const routes=[
//   {path:'/',component:Home},
//   {path:'/register',component:Register},
//   {path:'/login',component:Login},
//   {path:'/posts',component:Posts}
// ]
// const router = new VueRouter({
//   routes
// // })
// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
  
//         originalRequest._retry = true;
//         store.dispatch('LogOut')
//         return router.push('/login')
//     }
//   }
// })

// Vue.config.productionTip = false
// axios.defaults.withCredentials = true ; // this is done to save the cookies received from the API through the axios
// axios.defaults.baseURL = 'https://localhost:8080/'; // this is for requesting and making the response to api
// new Vue({
//   store,
//   router:router,
//   render: h => h(App),
// }).$mount('#app')
///////////////////////////

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://reqres.in/api/users";

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");