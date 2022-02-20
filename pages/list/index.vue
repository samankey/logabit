<template>
  <div>
    <ImageHeader
     :img="'list'"
     :contents="'🌈 시즌 1 | 1회차'"
    />
    <ListUser />
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';
import ListUser from '@/components/default/list/listUser';

export default {
  components: {
    ImageHeader,
    ListUser
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
