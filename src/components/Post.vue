<template>
    <li>
      <!--<User/>-->
      <h5>{{post.date}}</h5>
      <h3>{{post.text}}</h3>
      <!--<video :src="video" ref="vidRef" @click="togglePlay" />-->
      <video class = "video" v-bind:src = post.video />
      <!--<Hashtag/>-->
      <ul id="hashtagsList">
        <li v-for="tag in post.hashtags" :key="tag.name">
          {{ tag.name }}
        </li>
      </ul>
      <span> {{post.likes}} {{post.comments}}</span>
    </li>
</template>

<script>
//import { ref, reactive } from "vue";
//import Hashtag from "./Hashtag";
//import User from "./User";
import getPost from '../services/postService'

export default {
  name: "post",
  components: {
    //Hashtag,
    //User
  },
  data: function(){
    return{post: {}}
  },
  /*
  props: {
    video: String,
    date: Date,
    text: String,
    likes: Number,
    comments: Number,
    hashtags: Array
  },
  */

  created() {
    this.post = getPost()
  },
  /*
  setup() {
    const vidRef = ref(null);
    const state = reactive({
      playing: false,
    });
    const play = () => {
      vidRef.value.play();
      state.playing = true;
    };
    const pause = () => {
      vidRef.value.pause();
      state.playing = false;
    };
    const togglePlay = () => {
      if (state.playing) {
        pause();
      } else {
        play();
      }
    };
    return {
      vidRef,
      play,
      pause,
      togglePlay,
      state,
    };
  },
*/
};
</script>

<style scoped>
.post {
  position: relative;
  width: 100%;
  height: 100%;
}
video{
  width: 100%;
  height: auto;
  position: relative;
}

</style>
