<template>
  <div>
    <span>
      <img src = "photoUrl">
      <h2>{name}</h2>
    </span>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    photoUrl: String,
    name: String
  }
};
</script>

<style scoped>

</style>