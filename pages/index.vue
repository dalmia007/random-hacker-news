<template>
  <div>{{ storiesList }}</div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      isLoading: false,
      stories: null,
    }
  },
  computed: {
    storiesList() {
      return this.$store.state.stories
    },
  },
  created() {
    this.isLoading = true
    if (this.$store.state.stories === null) {
      this.$store.dispatch('fetchStoriesAndAuthors')
    }
    this.isLoading = false
  },
}
</script>
