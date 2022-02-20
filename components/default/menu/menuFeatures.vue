<template>
  <div class="menuFeatures">
    <div class="featuresWrap">
      <div
        v-for="(title, index) in featureList"
        :key="index"
        class="featrueItem"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean
    },

    featureList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  computed: {
    handleBG () {
      return this.isShow ? 'bg' : 'deActiveBG';
    },

    channel () {
      return this.helperType === '급구플러스';
    }
  }
};
</script>

<style lang="scss" scoped>
.menuFeatures {
  z-index: 2;
  width: 100%;

  .featuresWrap {
    background-color: #F6F7F9;

    .featrueItem {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(224, 228, 234, 0.5);
      transition: 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: rgba(246, 247, 251, 1);
      }

      &:first-child {
        border-radius: 0.5rem 0.5rem 0 0;
      }

      &:last-child {
        border-bottom: none;
        border-radius: 0 0 0.5rem 0.5rem;
      }
    }
  }

  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .deActiveBG {
    display: none;
  }
}
</style>
