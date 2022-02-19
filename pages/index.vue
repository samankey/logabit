<template>
  <div>
    <ImageHeader
     :img="'mainImg'"
     :contents="'👀 다른 포스팅도 읽어보기!'"
    />
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';

export default {
  components: {
    ImageHeader
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
