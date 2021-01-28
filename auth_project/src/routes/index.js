import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Login from '../views/Login'
import Posts from '../views/Posts'

Vue.use(VueRouter);

// we added a meta key to indicate that the user must be authenticated,
// now we need to have a router.BeforeEach navigation guard that checks if a route has the
// meta: {requiresAuth: true} key. 
// If a route has the meta key, it checks the store for a token; if present, it redirects them to the login route.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/posts',
    name: Posts,
    component: Posts,
    meta: {requiresAuth: true},
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach is a function that would be called before each routing is made , we can add any condition of routing 
// here
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) { // if true then it will route to same page it was already routing
      next()
      return
    }
    next('/login') ; // else will route to  '/login' page
  } else {
    next()
  }
})
// We also have a meta on the /register and /login routes.
// The meta: {guest: true} stops users that are logged in from 
// accessing the routes with the guest meta.
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});


export default router
