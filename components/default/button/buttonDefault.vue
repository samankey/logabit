<template>
  <div class="buttonDefault Body1" :class="setStyle()">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    styleType: {
      type: String,
      default: 'default'
    }
  },

  methods: {
    setStyle () {
      switch (this.styleType) {
        case 'join': return 'join ft_White_100';
        case 'login': return 'login ft_White_100';
        case 'main': return 'main';
        case 'link': return 'link ft_White_100';
        case 'default': return'default ft_White_100';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.buttonDefault {
  padding: 1rem 0;
  border-top: 4px solid #001129;
  text-align: center;
  cursor: pointer;
}

.join {
  background-color: #4353EB;
}

.login {
  background-color: #FF6D00;
}

.main {
  background-color: #FFD217;
}

.link {
  background-color: #38980F;
}

.default {
  background-color: rgba(0, 17, 41, 0.4);;
}
</style>