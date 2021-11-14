<template>
  <div class = "post">
    <li>
     <!-- <span>
        <img class = "profilePhoto" v-bind:src = post.user.photo />
        <h2>{{post.user.nickname}}</h2>
      </span>-->
      {{post.user}}
      <h5>{{post.date}}</h5>
      <h3>{{post.text}}</h3>
      <video class = "video" v-bind:src = post.video ref="vidRef" @click="togglePlay" />
      <!--<Hashtag/>-->
      <ul id="hashtagsList">
        <li v-for="tag in post.hashtags" :key="tag.name">
          {{ tag.name }}
        </li>
      </ul>
      <span> likes: {{post.likes}}  comments: {{post.comments}}</span>
    </li>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
//import Hashtag from "./Hashtag";
//import User from "./User";


export default {
  name: "post",
  components: {
    //Hashtag,
    //User
  },
  props: {
    post: Object,
  },

  created() {
    //this.User = this.post.user
  },


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

};
</script>

<style scoped>
.post {
  position: relative;
  width: 100%;
  height: 100%;
}
video{
  width: 50%;
  height: auto;
  position: relative;
}

ul{
  list-style: none;
}

.profilePhoto{
  width: 5%;
  height: auto;
  border-radius: 50%;
}

</style>
