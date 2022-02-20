<template>
  <div class="main">
    <Container class="ft_Black_100">
      <Nav />
      <Nuxt class="layout" />
      <Toast />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/default/default/container';
import Nav from '@/components/default/default/nav';
import Toast from '@/components/default/default/toast';

export default {
  components: {
    Container,
    Nav,
    Toast
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
</style>
