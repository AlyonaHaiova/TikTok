<template>
  <div class="trendingFeed">
    <ul>
      <Post
        v-for="post of this.paginatedPosts" :key="post.id"
        v-bind:post="post"/>
    </ul>
    <button v-if="this.currentPage * this.maxPerPage < this.posts.length" id="more" class="waves-button-input" @click="loadMore">Load More</button>
  </div>
</template>

<script>
import Post from "./Post";

export default({
  name: "TrendingFeed",
  props: {
    posts: []
  },
  data() {
    return {
      currentPage: 1,
      maxPerPage: 5,
    };

  },
  components: {
    Post,
  },
  computed:{
    paginatedPosts() {
      return this.posts.slice(0, this.currentPage * this.maxPerPage);
    }
  },
  methods: {
    loadMore() {
      this.currentPage++;
    },
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
#more {
  width: 40%;
  height: 15%;
  margin-bottom: 2em;
  padding: 0.7em;
  font-size: 2.5em;
  font-weight: bold;
  background-color: #212121;
  color: #FFF;
}

@media screen and (max-width: 700px) {
  #more {
    width: 80%;
    height: 10%;
  }
}
</style>
