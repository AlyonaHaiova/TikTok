<template>
  <div class = "user">
      <div class = "imageWrapper">
        <img class = "profilePhoto" v-bind:src = user.avatar />
      </div>
      <p id = "nickname">{{user.nickName}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  },
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: left;
}
.imageWrapper {
  float: left;
  margin-right: 1.5em;
  margin-bottom: 1em;
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.profilePhoto {
  display: inline;
  margin: 0 auto;
  height: auto;
  width: 100%;
}
#nickname {
  font-size: 1.5em;
  font-weight: bold;
}
</style>