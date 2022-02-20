<template>
  <div>
    <div class="nav Headline">
      logabit
    </div>
    <Menu v-if="!isShowNav" />
  </div>
</template>

<script>
import Menu from '@/components/nav/menu';

export default {
  components: {
    Menu
  },

  computed: {
    isShowNav () {
      return this.$route.path === '/login' || this.$route.path === '/join';
    }
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
