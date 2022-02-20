<template>
  <div class="noItem">
    <div class="icons Headline">💬</div>
    <div class="desc Body1">첫번째로 포스팅할 기회에요!</div>
  </div>
</template>

<script>
import ButtonDefault from '@/components/default/button/buttonDefault';
export default {
  components: {
    ButtonDefault
  }
}
</script>

<style lang="scss" scoped>
.noItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13rem;
  border-top: 4px solid #001129;

  .icons {
    margin-bottom: 1.5rem;
  }
}
</style>