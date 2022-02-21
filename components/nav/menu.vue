<template>
  <ul class="menuWrap Body1">
    <li
      v-for="(item, index) in nav"
      :key="index"
      class="menuItem"
      :class="navActive(index)"
      @click.stop="goLink(nav[index])"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
const pathToNavIndex = {
  '': 0,
  '/': 0,
  '/link': 1,
  '/list': 2,
};

import _ from 'lodash';

export default {
  data () {
    return {
      nav: [
        {
          isActive: false,
          title: '이번엔 어떤 포스팅이?',
          to: '/'
        },
        {
          isActive: false,
          title: '포스팅 할게요',
          to: '/link'
        },
        {
          isActive: false,
          title: '지난 포스팅도 볼래요!',
          to: '/list'
        }
      ]
    };
  },

  watch: {
    '$route.path' () {
      this.renewalNavActiveState();
    }
  },

  mounted () {
    this.renewalNavActiveState();
  },

  methods: {
    navActive (num) {
      return (this.nav[num].isActive) ? 'active' : '';
    },

    renewalNavActiveState () {
      this.nav.forEach((value) => {
        value.isActive = false;
      });
      try {
        this.nav[pathToNavIndex[this.$route.path]].isActive = true;
      } catch (e) {}
    },

    goLink (navData) {
      let navIdx = -1;
      _.each(this.nav, (nav, index) => {
        if (nav.to === navData.to) {
          navIdx = index;
        }

        this.nav[index].isActive = false;
      });

      this.nav[navIdx].isActive = true;

      return this.$router.push({ path: navData.to });
    }
  }
}
</script>

<style lang="scss" scoped>
.menuWrap {
  display: flex;
  border-bottom: 4px solid #001129;

  .menuItem {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 1rem 0;
    border-right: 4px solid #001129;
    cursor: pointer;

    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    background: #F6F7F9;
    padding: 8px 15px;
    /* color: #fff; */

    &:last-child {
      border-right: none;
    }
  }

  .menuItem:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #001129;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    -webkit-transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    -webkit-transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-in-out;
  }

  .menuItem:hover,
  .menuItem:focus,
  .menuItem:active {
    color: white;
  }

  .menuItem:hover:before,
  .menuItem:focus:before,
  .menuItem:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  .active {
    color: #FFF;
    background-color: #001129;
  }
}
</style>