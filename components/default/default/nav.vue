<template>
  <div>
    <div class="nav Headline">
      <div>
        logabit
      </div>
      <div>
        기록의 습관
      </div>
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
  justify-content: space-between;
  
  width: 100%;
  border-bottom: 4px solid #001129;

  div {
    padding: 0.25rem 1.5rem;
    
    &:first-child {
      border-right: 4px solid #001129;
    }
  }
}
</style>
