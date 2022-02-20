<template>
  <div>
    <ImageHeader
     :img="'login'"
     :contents="'🏅 오늘도 한 걸음 나아갔어요!'"
    />
    <Input :label="'이메일'" :placeholder="'이메일을 적어주세요'"/>
    <Input :label="'비밀번호'" :type="'password'" :placeholder="'비밀번호를 적어주세요'"/>
    <ButtonDefault :text="'로그인하기'" :style-type="'login'" />
     <ButtonDefault :text="'계정이 없으신가요?'" />
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
