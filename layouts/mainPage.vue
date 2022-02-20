<template>
  <div class="main">
    <Container class="container ft_Black_100">
      <Nav />
      <Nuxt class="layout" />
      <Toast />
    </Container>
    <div class="footer Caption ft_Black_20">developed by samankeyc, undefinedp</div>
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
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .container {
    margin-bottom: 5rem;
  }

  .footer {
    position: absolute;
    bottom: 1rem;
  }
}
</style>
