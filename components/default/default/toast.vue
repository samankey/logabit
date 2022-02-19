<template>
  <notifications position="top center" :width="400" :duration="2000" :max="2" style="margin-top: 40px">
    <template slot="body" slot-scope="{ item, close }">
      <div class="notification" :class="item.type === 'informative' ? '' : item.type === 'positive' ? 'positive' : 'warning'">
        <div class="iconTitleWrap">
          <p class="title">
            {{ item.title }}
          </p>
        </div>
        <button class="close" @click="close">
        </button>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.vue-notification-group {

  .notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    margin: 0 5px 5px;
    padding: 0px 1.75rem;
    font-size: 1rem;
    color: #ffffff;
    background: #656D7A;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;;

    .iconTitleWrap {
      display: flex;
      align-items: center;

      .title {
        margin-left: 1rem;
      }
    }

    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }

  .positive {
    background: #12805C;
  }

  .warning {
    background: #C9252D;
  }
}
</style>
