<template>
  <div class="userFeed">
    <ul>
       <Post
           v-for="post of this.userFeed" :key="post.id"
           v-bind:post="post" />
     </ul>
  </div>
</template>

<script>
import Post from "./Post";
import {getTrendingFeed} from "@/services/postService";

// Readme:
/*I use filter on TreadingFeed instead of using API function GetUserFeed.
API returned data such as { "killed": false, "code": 1, "signal": null, "cmd": "python ./scripts/getUserFeed.py kingloui23 10.10.40.6:38001" }
so it was impossible to get posts lists from there.
That`s why I used postService instead of the userFeedService*/

export default {
  name: "UserFeed",
  data: function(){
    return{
      userFeed: {
        userFeed: {}
      }
    }
  },
  props:{
    user: Object
  },
  components: {
    Post
  },
  methods:{
    async fetchUserFeed(){
      let trendingFeedArray = await getTrendingFeed()
      console.log(trendingFeedArray)
      this.userFeed = trendingFeedArray.filter(post => post.authorMeta.name === this.$route.params.nickname )
      console.log(this.UserFeed)
    }
  },
  created(){
    try{
      this.fetchUserFeed()
    } catch (error){
      console.log(error)
    }
  },
};
</script>

