<template>
  <div class="trendingFeed">
    <ul>
      <Post
        v-for="post of this.posts" :key="post.id"
        v-bind:post="post"/>
    </ul>
    <button id = "more" v-on:click="seeMore">More</button>
  </div>
</template>

<script>
import Post from "./Post";

export default({
  name: "TrendingFeed",
  props: {
    posts: []
  },
  components: {
    Post
  },
  methods:{
    seeMore(){

    }
  }
});
</script>

<style>
.trendingFeed {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 200ms ease;
}
#more {
  width: 30%;
  height: 15%;
  margin-bottom: 2em;
  font-size: 1.5em;
  background-color: #212121;
  color: #FFF;
}
</style>
