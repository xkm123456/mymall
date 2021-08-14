<template>
  <div id="home">
    <!-- 顶部购物街logo -->
    <NavBar class="home-navbar">
      <!-- 首页替换中间的标题 -->
      <template v-slot:middle>
        <h4>购物街</h4>
      </template>
    </NavBar>
    <Scroll id="con" ref="scroll" 
    :probeTypeNum="3" 
    :pullUpLoad='true'
    @loadMore="loadMore"
    @scroll="ShowBackTop">  <!-- 给子组件加上ref，父组件可以通过$ref来操作子组件中的对象 -->
      <!-- 轮播图 -->
      <Swiper>
        <SwiperItem v-for="item in banners" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </SwiperItem>
      </Swiper>
      <!-- 推荐模块 -->
      <RecommendView v-bind:recommends="homerecommends"></RecommendView>
      <!-- 本周流行模块(图片) -->
      <FeatureView></FeatureView>
      <!-- 商品风格导航 -->
      <TabControl
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @change_ProStyle="change_ProStyle_F"
      />
      <!-- 商品集合信息 -->
      <GoodList :goodslist="goods[currentProStyle].list" />
    </Scroll>
    <!-- 回到顶部按钮 -->
    <BackTop @click="backtopClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
// 顶部导航栏组件
import NavBar from "components/common/navbar/NavBar";
// 导入better-scroll滚动插件
import Scroll from "components/common/scroll/Scroll";
// 轮播图组件
import { Swiper, SwiperItem } from "components/common/swiper";
import { getHomeMultidata, getHomeProductdata } from "network/home";

// 推荐模块
import RecommendView from "views/home/childComps/RecommendView";
// 本周流行模块
import FeatureView from "views/home/childComps/FeatureView";
// 商品风格
import TabControl from "components/content/tabControl/TabControl";
// 商品列表
import GoodList from "components/content/goods/GoodList";
// 回到顶部按钮
import BackTop from 'components/content/backTop/BackTop'

export default {
  data() {
    return {
      banners: [],
      homerecommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentProStyle: "pop", // 保存当前商品风格,
      isShowBackTop:false
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  // 在实例创建完成后调用
  created() {
    // 1.请求多个数据(轮播图、)
    this.getHomeMultidata();

    // 2.请求商品数据(刚刚创建完成，就请求流行(pop)、新品(new)、精选(sell)三个模块的第一页数据)
    this.getHomeProductdata("pop");
    this.getHomeProductdata("new");
    this.getHomeProductdata("sell");
  },
  methods: {
    /* ***
      发送请求相关方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // console.log(res.data.banner.list);
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list; // 轮播图数据
        this.homerecommends = res.data.recommend.list; // 推荐数据
      });
    },
    getHomeProductdata(type) {
      // 根据对应的商品风格类型来获取页码
      let page = this.goods[type].page;
      getHomeProductdata(type, page).then((res) => {
        console.log(type + "shuju:");
        console.log(res);
        // 根据对应类型将第一次请求到的数据保存对应数组中
        for (let item of res.list[type]) {
          this.goods[type].list.push(item);
        }
        this.goods[type].page += 1;

        // this.goods[type].list.push(...res.list.pop);  // 也可以使用这种方式替换for循环
        // this.goods[type].page += 1;
      });
    },

    /* ***
      事件监听的相关方法 
    */
    // 修改商品的风格
    change_ProStyle_F(proStyle) {
      this.currentProStyle = proStyle;
    },
    // 回到顶部
    backtopClick(){
      // 通过refs来操作子组件
      let chi_scroll = this.$refs.scroll;
      // 使用ScrollTo来返回顶部
      chi_scroll.scrollTo(0,0,500);
    },
    // 根据位置来判断是否显示回到顶部按钮
    ShowBackTop(positioin){
      // -1000之前不显示回到顶部按钮
      this.isShowBackTop = positioin.y <= -1000 ? true : false;
    },
    // 下拉加载更多
    loadMore(){
      console.log(111);
      // 根据选择的商品风格来下拉加载更多
      this.getHomeProductdata(this.currentProStyle);
    }
  },
};
</script>

<style scoped>
#home {
  height: 100vh;  /* 设置视口高度 */
  padding-top: 44px;
}
.home-navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: deeppink;
}
.tab-control {
  position: sticky; /* sticky表示如果没有到定位的地方就是static定位，如果到了指定的位置就是fiexd定位 */
  top: 44px;
}
  #con{
    height:calc(100% - 98px);   /* calc可以计算属性 */
    overflow: hidden;
  }
</style>