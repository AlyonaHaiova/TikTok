<template>
  <div class="row">
    <div class="col m1 l1"></div>
    <div class="col s12 m10 l10">
      <div class="post">
        <li>
          <div class="card">
            <Loader v-if="loading"/>
            <div v-else class = "card-content">
              <User id="user"  v-if="typeof post.authorMeta !== 'undefined'"  v-bind:user="post.authorMeta"  v-on:click="goToProfile"/>
              <p class="views"  v-if="typeof post.playCount !== 'undefined'">{{ `Views:  ${post.playCount}` }}</p>
              <p class="text">{{ post.text }}</p>
            </div>
            <video class="video" autoplay v-bind:src = post.videoUrl ref="vidRef" @click="togglePlay" />
            <span class="hashtags" v-for="tag in post.hashtags" :key="tag.id">{{ '#'+ tag.name + '        ' }}</span>
          </div>
          <span class = 'reactions'>
            <img id="like" src ="../../public/img/icons/like.svg"/>
            <span v-if="typeof post.diggCount !== 'undefined'">{{ '   ' + post.diggCount }} </span>
            <img id="comment" src = "../../public/img/icons/comment.svg"/>
            <span  v-if="typeof post.commentCount !== 'undefined'">{{ '   ' + post.commentCount }}</span>
          </span>
        </li>
      </div>
    </div>
    <div class="col m1 l1"></div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import User from "./User";
import Loader from "./Loader";

export default {
  name: "post",
  components: {
    Loader,
    User,
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
  methods: {
    goToProfile() {
      this.$router.push({
        name: "Profile",
        params: {
          nickname: this.post.authorMeta.name,
        },
      });
    },
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

#user {
  position: relative;
  left: 0px;
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
.text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  text-align: left;
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

@media screen and (max-width: 750px) {
  .card {
    width: 100%;
  }
}
</style>
