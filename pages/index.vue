<template>
  <div>
    <ImageHeader
     :img="'mainImg'"
     :contents="'👀 다른 포스팅도 읽어보기!'"
    />
    <ListUser />
    <ButtonDefault :text="'포스팅 하러가기'" :style-type="'main'" />
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';
import ListUser from '@/components/default/list/listUser';
import ButtonDefault from '@/components/default/button/buttonDefault';

export default {
  components: {
    ImageHeader,
    ListUser,
    ButtonDefault
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
