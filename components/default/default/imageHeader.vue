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

  img {
    &:hover {
      animation-duration: 0.8s;
      animation-name: shake;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>