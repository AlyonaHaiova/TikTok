<template>
  <div class = "post">
    <li>
      <Loader v-if= "loading"/>
      <div v-else class = "content">
        <h5>{{post.publishedAt}}</h5>
        <User v-bind:content="this.user" v-on:click="goToProfile(this.user)"/>
        <h3>{{post.text}}</h3>
        <video class = "video" v-bind:src = post.video ref="vidRef" @click="togglePlay" />
        <!--<Hashtag/>-->
        <ul id="hashtagsList">
            <li class = "hashtag" v-for="tag in post.hashtags" :key="tag.name">
              {{ tag.name }}
          </li>
        </ul>
        <span> likes: {{post.likes}}  comments: {{post.comments}}</span>
      </div>
    </li>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
//import Hashtag from "./Hashtag";
import User from "./User";
import Loader from "./Loader";
import router from "../router/index"


export default {
  name: "post",
  components: {
    Loader,
    //Hashtag,
    User
  },
  props: {
    post: Object,
  },

  data() {
    return{
      loading: true
    }
  },

  mounted() {
    this.loading = false
  },

  methods:{
    goToProfile(user){
      router.push({
        name: 'Profile',
        params: {
          propUser : user
        }
    })
    }
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

.hashtag{
  color: blue;
}

</style>
