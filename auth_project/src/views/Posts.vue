<template>
    <div>
        this is a Post Page
        <h1>Write your own post</h1>
        <form @submit="submit">
            <label>Title</label>
            <input type="text" v-model="form.title" />
            <div>
                <textarea v-model="form.write_up" placeholder="Write your Content ..."></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div class="posts" v-if="Posts">
            <ul>
                <li v-for="post in Posts" :key="post.id">
                    <div id="post-div">
                    <p>{{post.title}}</p>
                    <p>{{post.write_up}}</p>
                    <p>Written By: {{post.author.username}}</p>
                    </div>
                </li>
            </ul>
        </div>
      <div v-else>
        Oh no!!! We have no posts
      </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name:'Posts',
    data(){
        return {
            form:{
                title:'',
                write_up:''
            }
        }
    },
    created: function () { // this is called when a soon as html loads
    // a function to call getposts action
        this.GetPosts()
    },
    computed:{
        ...mapGetters({Posts: "StatePosts", User: "StateUser"}),
    },
    methods:{
        ...mapActions(["CreatePost", "GetPosts"]),
        async submit(){
            await this.CreatePost(this.form);
        }

    }
}
</script>