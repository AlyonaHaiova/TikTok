<template>
  <div class="userFeed">
    <h1>Hi</h1>
    <ul>
      <Post
          v-for="post of this.userPosts" :key="post.id"
          v-bind:post="post"
      />
    </ul>
  </div>
</template>

<script>
import Post from "./Post";
import { getUserPosts } from "../services/userFeedService";

export default {
  name: "UserFeed",
  data: function(){
    return{userPosts: []}
  },
  props:{
    user: Object
  },
  components: {
    Post,
  },
  created(){
    this.userPosts = getUserPosts(this.user)
  },
};
</script>

<style scoped>

</style>