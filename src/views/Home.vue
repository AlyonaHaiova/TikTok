<template>
  <div class="home">
   <TrendingFeed v-bind:posts="trendingFeedInfo"/>
  </div>
</template>

<script>
import TrendingFeed from "../components/TrendingFeed";
import {getTrendingFeed} from "@/services/postService";

export default {
  name: "Home",
  components: {
    TrendingFeed
  },
  data(){
    return{
      trendingFeedInfo: {
        trendingFeed: {}
      }
    }
  },
  methods:{
    async fetchTrendingFeedInfo(){
      this.trendingFeedInfo = await getTrendingFeed()
    }
  },
  created(){
    try{
      this.fetchTrendingFeedInfo()
    } catch (error){
      console.log(error)
    }
  },
};
</script>



