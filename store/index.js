export const state = () => ({
  stories: null,
})

export const getters = {
  getStories(state) {
    return state.stories
  },
}

export const mutations = {
  STORE_STORIES(state, stories) {
    stories.sort((a, b) => b.score - a.score)
    state.stories = stories
  },
}

export const actions = {
  async fetchStoriesAndAuthors({ commit }) {
    await this.$axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json ')
      .then((res) => {
        const tenShuffledStories = res.data
          .sort(() => 0.5 - Math.random())
          .slice(0, 10)
        return tenShuffledStories
      })
      .then(async (tenShuffledStories) => {
        const storyDetails = await Promise.all(
          tenShuffledStories.map(async (story) => {
            const res = await this.$axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${story}.json`
            )
            return res.data
          })
        )
        return storyDetails
      })
      .then(async (storyDetails) => {
        const authorDetails = await Promise.all(
          storyDetails.map(async (story) => {
            const res = await this.$axios.get(
              `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
            )
            return res.data
          })
        )
        const storieswithAuthors = storyDetails.map((item, i) =>
          Object.assign({}, item, authorDetails[i])
        )

        commit('STORE_STORIES', storieswithAuthors)
      })
      .catch((e) => console.error(e))
  },
}
