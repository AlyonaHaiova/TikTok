<template>
  <div>
    <span>
      <img class = "profilePhoto" v-bind:src = user.photo />
      <h2>{{user.nickname}}</h2>
    </span>
  </div>
</template>

<script>

import getUser from '../services/userService'

export default {
  name: "User",
  data: function () {
    return {
      user: {}
    }
  },
  created(){
    this.user = getUser()
  }
};
</script>

<style scoped>
.profilePhoto{
  width: 5%;
  height: auto;
  border-radius: 50%;
}
</style>