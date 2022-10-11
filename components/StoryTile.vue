<template>
  <div class="grid">
    <a
      v-for="story in stories"
      :key="story.title"
      :href="story.url ? story.url : '/'"
      class="col-12 col-tablet-6"
    >
      <div class="card">
        <img src="~/assets/images/image.jpeg" />
        <div class="information">
          <time class="time">
            {{ getElapsedTime(story.time) }}
          </time>
          <h5 class="title">
            {{ story.title }}
          </h5>
        </div>
        <div class="card-footer">
          <div class="user-info">
            <ClientOnly>
              <unicon name="user-circle"></unicon>
            </ClientOnly>
            <div class="user-name">
              {{ story.by }}
              <span class="user-karma"> ({{ story.karma }}) </span>
            </div>
          </div>
          <div class="score-info">
            <ClientOnly>
              <unicon name="star"></unicon>
            </ClientOnly>
            <div class="score">
              {{ story.score }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    stories: { default: null, type: Array },
  },
  methods: {
    getElapsedTime(date) {
      let delta = Math.abs(new Date().getTime() / 1000 - date)
      const days = Math.floor(delta / 86400)
      if (days) return `${days} days ago`
      delta -= days * 86400
      const hours = Math.floor(delta / 3600) % 24
      if (hours) return `${hours} hours ago`
      delta -= hours * 3600
      const minutes = Math.floor(delta / 60) % 60
      if (minutes) return `${minutes} minutes ago`
      delta -= minutes * 60
      const seconds = delta % 60
      return `${seconds} seconds ago`
    },
  },
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  grid-gap: $gap;
  gap: $gap;
  max-width: 834px;
  margin: 0 auto;
}

@include create-selectors;

@each $breakpoint, $width in $breakpoints {
  @media (min-width: $width) {
    @include create-selectors($breakpoint);
  }
}

.card {
  border: 3px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background: rgba(208, 208, 203, 0.402);
  min-height: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
  object-fit: fill;
  aspect-ratio: inherit;
}

.information {
  padding: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

.title {
  margin-top: 1.5rem;
  color: #111827;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 640px) {
    font-size: 22px;
  }
}

.time {
  color: gray;
}

.user-info {
  display: flex;
  align-items: center;
}

.score-info {
  display: flex;
  align-items: center;

  @media (min-width: 640px) {
    display: flex;
  }
}

.user-karma {
  color: gray;
}

.card-footer {
  margin-top: auto;
  padding: 16px;
  padding-top: 0;
}

svg {
  margin-right: 10px;
}
</style>
