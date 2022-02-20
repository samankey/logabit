<template>
  <div>
    <ListFilter />
    <ImageHeader
     :img="'list'"
     :contents="'🌈 시즌 1 | 1회차'"
    />
    <ListUser />
  </div>
</template>

<script>
import ListFilter from '@/components/list/listFilter';
import ImageHeader from '@/components/default/default/imageHeader';
import ListUser from '@/components/default/list/listUser';

export default {
  components: {
    ListFilter,
    ImageHeader,
    ListUser
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
