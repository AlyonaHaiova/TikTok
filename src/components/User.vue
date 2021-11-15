<template>
  <div class = "user">
    <span>
      <div class = "imageWrapper">
        <img class = "profilePhoto" v-bind:src = user.photo />
      </div>
    <p id = "nickname">{{user.nickname}}</p>
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
.user{
  display: flex;
  justify-content: center;
}
.imageWrapper{
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.profilePhoto{
  display: inline;
  margin: 0 auto;
  height: auto;
  width: 100%;
}

#nickname{

}
</style>