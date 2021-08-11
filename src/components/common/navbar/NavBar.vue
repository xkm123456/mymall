<template>
  <!-- 顶部导航栏 -->
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .nav-bar{
        display: flex;
        justify-content: space-between;
        /* 一般导航的高度为44px */
        height: 44px;
        line-height: 44px;
        color: white;
        box-shadow: 1px 1px 1px rgba(1,1,1,0.1);
    }

    .left,.right{
        width: 60px;
    }

    .middle{
        flex: 1;
        text-align: center;
    }
</style>