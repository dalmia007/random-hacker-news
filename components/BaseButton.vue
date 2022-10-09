<template>
  <button class="my-btn">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.my-btn {
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  background: black;
  color: white;
  @include bold-text;
  padding: 1rem;
  margin: 1rem auto;
}
</style>
