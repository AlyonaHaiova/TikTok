<template>
  <div class="post">
    <li>
      <User/>
      <h5>{{date}}</h5>
      <h3>{{text}}</h3>
      <video :src="video" ref="vidRef" @click="togglePlay" />
      <Hashtag/>
      <span> {{likes}} {{comments}}</span>
    </li>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Hashtag from "@/components/Hashtag";
import User from "@/components/User";


export default {
  name: "post",
  components: {
    Hashtag,
    User
  },
  props: {
    video: String,
    date: Date,
    text: String,
    likes: Number,
    comments: Number,
    hashtags: Array
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
video {
  width: 100%;
  height: auto;
  position: relative;
}

</style>
