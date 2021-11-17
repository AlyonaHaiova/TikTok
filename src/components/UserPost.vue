<template>
  <div class="row">
    <div class="col s0 m1 l1"></div>
    <div class="col s12 m10 l10">
      <div class="post">
        <li>
          <div class="card">
            <Loader v-if="loading"/>
            <div v-else class = "card-content">
              <p class="views">{{ `Views:  ${post.stats.playCount}` }}</p>
            </div>
            <video class="video" poster="../../public/img/pictures/video_not_found.png" autoplay v-bind:src = post.video.cover ref="vidRef" @click="togglePlay" />
            <span class="hashtags"> {{ post.desc }}</span>
          </div>
          <span class="reactions">
            <img id="like" src ="../../public/img/icons/like.svg"/>
            <span v-if="typeof post.stats.diggCount !== 'undefined'">{{ '   ' + post.stats.diggCount }}</span>
            <img id="comment" src = "../../public/img/icons/comment.svg"/>
            <span v-if="typeof post.stats.commentCount !== 'undefined'">{{ '   ' + post.stats.commentCount }}</span>
          </span>
        </li>
      </div>
    </div>
    <div class="col s0 m1 l1"></div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Loader from "./Loader";

export default {
  name: "userPost",
  components: {
    Loader,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
    this.$refs.vidRef.play();
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
      if (!state.playing) {
        play();
      } else {
        pause();
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
  font-size: 1.5em;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: auto;
  position: relative;
}

.card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.card-content {
  text-align: left;
}
.views {
  margin-bottom: 0.3em;
  font-size: 0.7em;
  color: #686868;
}

.hashtags {
  color: #3f729b;
}
.reactions {
  font-size: 1.5em;
}
#like {
  width: 5%;
  height: auto;
}
#comment {
  width: 5%;
  height: auto;
}
</style>