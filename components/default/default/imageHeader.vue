<template>
  <div class="imageHeader">
    <img :src="require(`~/assets/img/${img}.png`)" alt="main">
    <div class="Title content">{{ contents }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },

    contents: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.imageHeader {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  height: 100%;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>