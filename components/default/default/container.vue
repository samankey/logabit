<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 750px;
  background-color: #F6F7F9;
  overflow-y: auto;
  overflow-x: hidden;
  border: 4px solid #001129;
}
</style>
