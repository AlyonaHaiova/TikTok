<template>
  <div>
    Hello
    <User id = "user"/>
    <UserFeed v-bind:user="propUser"/>
  </div>
</template>

<script>

import User from "../components/User";
import UserFeed from "../components/UserFeed";

export default {
  name: "Profile",
  props: {
    propUser: {
      type: Object
        },
  },
  components : {
    User,
    UserFeed
  }

};
</script>

<style scoped>

</style>