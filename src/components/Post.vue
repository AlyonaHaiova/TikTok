<template>
  <div class = "post">
    <li>
      <Loader v-if= "loading"/>
      <div v-else class = "content">
        <User v-bind:user="post.user" v-on:click="goToProfile"/>
        <p id = "date">{{post.publishedAt}}</p>
        <p class = "text">{{post.text}}</p>
        <video class = "video" v-bind:src = post.video ref="vidRef" @click="togglePlay" />
        <!--<Hashtag/>-->
        <span class = "hashtags" v-for="tag in post.hashtags" :key="tag.name">{{ tag.name + '        '}}</span>
        <!--<ul id="hashtagsList">
            <li class = "hashtag" v-for="tag in post.hashtags" :key="tag.name">
              {{ tag.name }}
          </li>
        </ul>-->
        <br>
        <span class = 'reactions'>
          <img id = "like" src = "../../public/img/icons/like.svg"/> {{'   ' + post.likes}}
          <img id = "comment" src = "../../public/img/icons/comment.svg"/>{{'   ' + post.comments}}
        </span>
      </div>
    </li>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
//import Hashtag from "./Hashtag";
import User from "./User";
import Loader from "./Loader";
//import router from "../router/index"


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
    goToProfile(){
      this.$router.push({
        name: 'Profile',
        params:{
          nickname: this.post.user.nickname
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
  font-size: 1.5em;
  width: 100%;
  height: 100%;
}
video{
  width: 100%;
  height: auto;
  position: relative;
}

ul{
  list-style: none;
}
.content{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.text{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  text-align: left;
}

#date{
  font-size: 0.7em;
  color: #686868;
}

.hashtags{
  color: #3F729B;
}
.reactions{
  font-size: 1.5em;
}


#like{
  width: 5%;
  height: auto;
}
#comment{
  width: 5%;
  height: auto;
}
</style>
