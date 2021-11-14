<template>
  <div class="trendingFeed">
    <ul>
      <Post
        v-for="post in posts" :key="post.id"
        v-bind:post="post"
      />
    </ul>
  </div>
</template>

<script>


import Post from "./Post";


export default({
  name: "TrendingFeed",
  //props: ['posts'],
  data: function(){
    return{posts: []}
  },
  components: {
    Post,
  },

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
</style>
