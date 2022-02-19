<template>
  <ul class="menuWrap Body1">
    <li v-for="(item, index) in menuList" :key="index" class="menuItem">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      menuList: ['이번엔 어떤 포스팅이?', '포스팅 할게요!', '지난 포스팅도 볼래요!']
    };
  }
}
</script>

<style lang="scss" scoped>
.menuWrap {
  display: flex;
  border-bottom: 4px solid #001129;

  .menuItem {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 1rem 0;
    border-right: 4px solid #001129;

    &:last-child {
      border-right: none;
    }
  }
}
</style>