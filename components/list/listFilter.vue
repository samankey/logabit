<template>
  <div class="filter Body1">
    <div class="filterItem" @click.stop="handleSeasonFilter(true)">
      시즌 1
      <img src="~assets/img/icon/caret_down_fill.png" alt="arrow" :class="rotateSeasonIcons">
      <MenuFrame
        :is-show="isShowSeasonFilter"
        :top="3.31"
        :left="-4"
        :close="'handleSeasonFilter'"
        @handleSeasonFilter="handleSeasonFilter"
      >
        <MenuFeatures
          v-if="isShowSeasonFilter"
          class="features"
          :is-show="isShowSeasonFilter"
          :feature-list="seasonList"
        />
      </MenuFrame>
    </div>
    <div class="filterItem" @click.stop="handleRoundFilter(true)">
      회차 1
      <img src="~assets/img/icon/caret_down_fill.png" alt="arrow" :class="rotateRoundIcons">
      <MenuFrame
        :is-show="isShowRoundFilter"
        :top="3.31"
        :left="-4"
        :close="'handleRoundFilter'"
        @handleRoundFilter="handleRoundFilter"
      >
        <MenuFeatures
          v-if="isShowRoundFilter"
          class="features"
          :is-show="isShowRoundFilter"
          :feature-list="roundList"
        />
      </MenuFrame>
    </div>
  </div>
</template>

<script>
import MenuFrame from '@/components/default/menu/menuFrame';
import MenuFeatures from '@/components/default/menu/menuFeatures';

export default {
  components: {
    MenuFrame,
    MenuFeatures
  },

  data () {
    return {
      isShowSeasonFilter: false,
      isShowRoundFilter: false,
      seasonList: ['1', '2', '3', '1', '2', '3'],
      roundList: ['1', '2', '3']
    }
  },

  computed: {
    rotateSeasonIcons () {
      return this.isShowSeasonFilter ? 'up' : 'down';
    },

    rotateRoundIcons () {
      return this.isShowRoundFilter ? 'up' : 'down';
    }
  },

  methods: {
    handleSeasonFilter (val) {
      this.isShowSeasonFilter = val;
    },

    handleRoundFilter (val) {
      this.isShowRoundFilter = val;
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  display: flex;
  border-bottom: 4px solid #001129;

  .filterItem {
    position: relative;
    flex: 1;
    padding: 1rem 0;
    text-align: center;
    
    &:first-child {
      border-right: 4px solid #001129;
    }

    img {
      position: absolute;
      top: 50%;
      right: 1rem;
      width: 1.75rem;
    }

    .down {
      transition: 0.2s ease-in-out;
      transform: translateY(-50%) rotate(0deg);
    }

    .up {
      transition: 0.2s ease-in-out;
      transform: translateY(-50%) rotate(-180deg);
    }
  }
}
</style>