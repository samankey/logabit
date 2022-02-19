<template>
  <div>
    <div class="nav Headline">
      logabit
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/nav/menu';

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  border-bottom: 4px solid #001129;
}
</style>
