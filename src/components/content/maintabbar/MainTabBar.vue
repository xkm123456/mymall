<template>
  <div>
      <TabBar>
      <TabBarItem link="/home" activeColor="red">
      <!-- ~是因为在Dom里面使用必须要加上 -->
      <!-- Vue2.6.0已经废弃之前的插槽使用方法了 -->
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/icon01.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/icon01_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem link="/classify" activeColor="red">
        <!-- 旧的插槽使用方法 -->
        <!-- <img src="@/assets/img/tabbar/icon02.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/icon02_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div> -->
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/icon02.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/icon02_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem link="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/icon03.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/icon03_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem link="/mine">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/icon04.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/icon04_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
// 引入TabBar组件
import TabBar from 'components/common/tabbar/TabBar.vue'
// 引入TabBarItem组件
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>