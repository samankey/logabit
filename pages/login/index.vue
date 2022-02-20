<template>
  <div>
    <ImageHeader
     :img="'login'"
     :contents="'🏅 오늘도 한 걸음 나아갔어요!'"
    />
    <Input :label="'이메일'" :placeholder="'이메일을 적어주세요'"/>
    <Input :label="'비밀번호'" :type="'password'" :placeholder="'비밀번호를 적어주세요'"/>
  </div>
</template>

<script>
import ImageHeader from '@/components/default/default/imageHeader';
import Input from '@/components/default/input/input';

export default {
  components: {
    ImageHeader,
    Input
  },

  layout: 'mainPage'
}
</script>

<style lang="scss" scoped>
</style>
