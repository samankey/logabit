<template>
  <div class="filter Body1">
    <div class="filterItem">
      시즌 1
      <img src="~assets/img/icon/caret_down_fill.png" alt="arrow">
    </div>
    <div class="filterItem">
      회차 1
      <img src="~assets/img/icon/caret_down_fill.png" alt="arrow">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  border-bottom: 4px solid #001129;

  .filterItem {
    position: relative;
    flex: 1;
    padding: 1rem 0;
    text-align: center;
    
    &:first-child {
      border-right: 4px solid #001129;
    }

    img {
      position: absolute;
      top: 50%;
      right: 1rem;
      width: 1.75rem;
      transform: translateY(-50%);
    }
  }
}
</style>