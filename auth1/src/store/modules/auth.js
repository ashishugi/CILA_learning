import axios from "vue-axios";

const state={
    users:null,
    posts:null
}
const getters={ // getters are used to get the state
    isAuthenticated:state=>  (Boolean)(state.user),
    StatePosts:state=>state.posts,
    StateUser:state=>state.user
}
const actions={
    async Register({dispatch},form){ // is is sign up function for the user
        await axios.post('register',form); // this is done to send the form data to register
        let UserForm =  new FormData(); // assigning our from data to new response data
        UserForm.append('username',form.username);
        UserForm.append('password',form.password);
        // Next, we will be dispatching our form username and password to our login action
        await dispatch('LogIn', UserForm); // this will carry our form data to login page and redirect to login page
    },
    async LoginIn({commit},User){
        //When a user fills in their username and password, 
        //it is passed to a User which is a FormData object,
         //the LogIn function takes the User object and makes a POST request to the /login endpoint to log in the user.
        await    axios.post('login',User);
        await commit('setUser',User.get('username'));
    },
    async CreatePost({dispatch},post){ // Our CreatePost action is a function,
        // that takes in the post and sends it to our /post endpoint, 
        //and then dispatches the GetPosts action. This enables the user to see their posts after creation.
        await axios.post('post',post);
        await dispatch('GetPosts');
    },
    async GetPosts({commit}){
        //Our GetPosts action sends a GET request to 
        //our /posts endpoint to fetch the posts in our API and commits setPosts mutation.
        let response =  await axios.get('posts');
        commit('setPosts',response.data);
    },
    async LogOut({commit}){
        let user=null;
        commit('logout',user);
    }

}
const mutations={
    setUser(state,Username){
        state.user = username;
    },
    setPosts(state,posts){
        state.post = data;
    },
    LogOut(state){
        state.user=null,
        state.posts=null
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}