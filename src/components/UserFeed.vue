<template>
  <div class="userFeed">
    <ul>
       <Post
           v-for="post of this.userFeedInfo" :key="post.id"
           v-bind:post="post" />
     </ul>
  </div>
</template>

<script>
import Post from "./Post";
import { getTrendingFeed } from "@/services/postService";
//import { userFeed } from "@/services/userFeedService";

export default {
  name: "UserFeed",
  data() {
    return {
      userFeedInfo: {
        userFeed: {}
      },
    };
  },
  props: {
    user: Object,
  },
  components: {
    Post,
  },
  methods : {
    async fetchUserFeedInfo() {
      let trendingFeed = await getTrendingFeed();
      this.userFeedInfo = trendingFeed.filter( post => post.authorMeta.name === this.$route.params.nickname)
    },
  },
  created() {
    try {
      this.fetchUserFeedInfo()
    } catch (error){
      console.log(error);
    }
  },
};
</script>

