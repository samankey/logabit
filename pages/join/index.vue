<template>
  <div>
    <ImageHeader
     :img="'join'"
     :contents="'✋🏻대환영!'"
    />
    <Input :label="'이메일'" :placeholder="'이메일을 입력해주세요!'"/>
    <Input :label="'비밀번호'" :type="'password'" :placeholder="'비밀번호를 입력해주세요! (최소 8글자 이상)'"/>
    <Input :label="'비밀번호 확인'" :type="'password'" :placeholder="'비밀번호를 다시 입력해주세요!'"/>
    <Input :label="'닉네임'" :placeholder="'4글자 이하 한글 닉네임만 가능해요!'"/>
    <ButtonDefault :text="'가입을 완료하시겠어요?'" :style-type="'join'" />
    <ButtonDefault :text="'이미 계정이 있으신가요?'" />
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
