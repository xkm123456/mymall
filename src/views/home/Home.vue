<template>
  <div id="home">
    <!-- 顶部购物街logo -->
    <NavBar class="home-navbar">
      <!-- 首页替换中间的标题 -->
      <template v-slot:middle>
        <h4>购物街</h4>
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
    <!-- 推荐模块 -->
    <RecommendView v-bind:recommends="homerecommends"></RecommendView>
  </div>
</template>

<script>
// 顶部导航栏组件
import NavBar from 'components/common/navbar/NavBar'
// 轮播图组件
import {Swiper,SwiperItem} from 'components/common/swiper'
import {getHomeMultidata} from 'network/home'
// 推荐模块
import RecommendView from 'views/home/RecommendView'

export default {
  data(){
    return {
      banners:[],
      homerecommends:[]
    }
  } ,
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView
  },
  // 在实例创建完成后调用
  created(){
    // 1.请求多个数据(轮播图、)
    getHomeMultidata().then(res => {
      console.log(res);
      console.log(res.data.banner.list);
      console.log(res.data.recommend.list);
      this.banners = res.data.banner.list;          // 轮播图数据
      this.homerecommends = res.data.recommend.list;    // 推荐数据
    })
  }
}
</script>

<style>
  .home-navbar{
    background-color: deeppink;
  }
</style>