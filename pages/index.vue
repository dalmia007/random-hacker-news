<template>
  <div class="container">
    <SimpleSpinner v-if="storiesList == null" />
    <div v-else>
      <h1 class="title">Top Hacker News Stories</h1>
      <StoryTile :stories="storiesList" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {}
  },
  computed: {
    storiesList() {
      return this.$store.state.stories
    },
  },
  created() {
    if (this.$store.state.stories === null) {
      this.$store.dispatch('fetchStoriesAndAuthors')
    }
  },
}
</script>
<style>
.container {
  width: 100%;
  max-width: 834px;
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: center;
}
</style>
