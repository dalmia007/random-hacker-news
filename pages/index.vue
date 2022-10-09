<template>
  <div>
    <SimpleSpinner v-if="storiesList == null" />
    {{ storiesList }}
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
