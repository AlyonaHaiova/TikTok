<template>
  <div class="home">
    <TrendingFeed/>
  </div>
</template>

<script>


import TrendingFeed from "../components/TrendingFeed";
export default {
  name: "Home",
  components: {
    TrendingFeed
  },
};
</script>
