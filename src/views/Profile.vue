<template>
  <div>
    Hello
    <User id = "user" v-bind:user="user"/>
    <UserFeed v-bind:user="user"/>
  </div>
</template>

<script>

import User from "../components/User";
import UserFeed from "../components/UserFeed";
import getUser from "../services/userService";
export default {
  name: "Profile",
  data() {
    return {
      user: {}
    }
  },
/*
  props: {
    propUser: {
      type: Object
        },
  },*/
  components : {
    User,
    UserFeed
  },

  methods: {
    getProfileUser(){
      this.user = getUser(this.$route.params.nickname)
    }
  },
  created() {
    this.getProfileUser()
  }

};
</script>

<style scoped>

</style>