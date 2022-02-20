<template>
  <div v-if="isShow" class="menuFrame" :style="`top: ${top}rem; left: ${left}px`">
    <div :class="handleBG" @click.stop="handleShow(false)" />
    <div class="frame">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean
    },

    top: {
      type: Number,
      default: 0
    },

    left: {
      type: Number,
      default: 0
    },

    close: {
      type: String,
      default: ''
    }
  },

  computed: {
    handleBG () {
      return this.isShow ? 'bg' : 'deActiveBG';
    }
  },

  methods: {
    handleShow (val) {
      this.$emit(this.close, val);
    }
  }
};
</script>

<style lang="scss" scoped>
.menuFrame {
  position: absolute;
  z-index: 2;
  width: 377px;

  .frame {
    border: 4px solid #001129;
    background-color: #F6F7F9;
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
