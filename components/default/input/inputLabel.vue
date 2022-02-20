<template>
  <div class="inputLabel Body1">
    <div class="label">{{ label }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.inputLabel {
  border-top: 4px solid #001129;

  .label {
    padding: 0.75rem 0;
    text-align: center;
  }
}
</style>