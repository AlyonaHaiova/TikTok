<template>
  <div>
    <User id="user" v-bind:user="mappedUser" />
    <p>{{ `Followers  -  ${mappedUser.fans}` }}</p>
    <p>{{ `Followings  -  ${mappedUser.following}` }}</p>
    <p>{{ `Hearts  -  ${mappedUser.heart}` }}</p>
    <p>{{ `Videos  -  ${mappedUser.video}` }}</p>
    <UserFeed v-bind:user="userInfo.user" />
  </div>
</template>

<script>
import User from "../components/User";
import UserFeed from "../components/UserFeed";
import { getUserInfo } from "@/services/userService";

export default {
  name: "Profile",
  props: {
    user: Object,
  },
  data() {
    return {
      userInfo: {
        user: {},
      },
    };
  },
  components : {
    User,
    UserFeed,
  },
  computed: {
    mappedUser() {
      return {
        nickName: this.userInfo.user.nickname,
        avatar: this.userInfo.user.avatarMedium,
        following: this.userInfo.stats.followingCount,
        fans: this.userInfo.stats.followerCount,
        heart: this.userInfo.stats.heartCount,
        video: this.userInfo.stats.videoCount,
      };
    },
  },
  methods: {
    async fetchUserInfo() {
      this.userInfo = await getUserInfo(this.$route.params.nickname);
    }
  },
  created() {
    try {
      this.fetchUserInfo();
    }
    catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
#user {
  justify-content: center;
  margin: 3em;
  margin-top: 5em !important;
}
p {
  font-size: 2em;
}

</style>