<template>
  <div class="userFeed">
    <ul>
       <UserPost
           v-for="post of this.userFeedInfo" :key="post.id"
           v-bind:post="post" />
     </ul>
  </div>
</template>

<script>
import UserPost from "./UserPost";
import { userFeed } from "@/services/userFeedService";

export default {
  name: "UserFeed",
  data() {
    return {
      userFeedInfo: {
        userFeed: {}
      },
    };
  },
  props: {
    user: Object,
  },
  components: {
    UserPost,
  },
  created() {
    try {
      this.userFeedInfo = userFeed
    } catch (error){
      console.log(error);
    }
  },
};
</script>

