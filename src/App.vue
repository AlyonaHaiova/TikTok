<template>
  <div class = "header">
    <h1 id = "title"> Tik Tuk</h1>
  </div>
  <Home />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#title {
  font-family: 'Inter', sans-serif;
  font-size: 3em;
  color: white;
  margin: 0;
  padding-top: 0.5em;
}
.header {
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #212121;
}
ul {
  list-style: none;
}
</style>
