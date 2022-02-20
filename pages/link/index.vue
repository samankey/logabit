<template>
  <div>
    <ImageHeader
     :img="'link'"
     :contents="'📝 타이틀과 링크를 적어 올려보세요!'"
    />
    <Input :label="'타이틀'" :placeholder="'타이틀을 적어주세요 (최대 25글자)'"/>
    <Input :label="'링크'" :placeholder="'링크를 붙여넣어주세요'"/>
    <ButtonDefault :text="'포스팅하기'" :style-type="'link'" />
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';
import Input from '@/components/default/input/input';
import ButtonDefault from '@/components/default/button/buttonDefault';

export default {
  components: {
    ImageHeader,
    Input,
    ButtonDefault
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
