<template>
  <div class="listUser Body1">
    <div class="listInfo">
      <div class="name">샘</div>
      <div class="title">코드 리뷰 잘 요청하는 법</div>
    </div>
    <div class="listFeature">
      <div class="favorite">
        <img src="~assets/img/icon/heart_black.png" alt="heart_black">
      </div>
      <div class="edit">
        수정
      </div>
      <div class="delete">
        삭제
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.listUser {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #001129;

  .listInfo {
    display: flex;
    align-items: center;

    .name {
      padding: 0.75rem 1.5rem;
      border-right: 4px solid #001129;
    }

    .title {
      padding-left: 4rem;
      cursor: pointer;
    }
  }

  .listFeature {
    display: flex;
    align-items: center;
    border-left: 4px solid #001129;

    .favorite {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      cursor: pointer;

      img {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    .edit {
      padding: 0.75rem 1.5rem;
      border-left: 4px solid #001129;
      cursor: pointer;
    }

    .delete {
      padding: 0.75rem 1.5rem;
      border-left: 4px solid #001129;
      cursor: pointer;
    }
  }
}
</style>
