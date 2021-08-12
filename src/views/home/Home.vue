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
    <!-- 本周流行模块 -->
    <FeatureView></FeatureView>
    <TabControl :title="['流行','新款','精选']" class="tab-control" @change_ProStyle="change_ProStyle_F"/>
    <GoodList :goodslist="goods[currentProStyle].list"/>
  </div>
</template>

<script>
// 顶部导航栏组件
import NavBar from 'components/common/navbar/NavBar'
// 轮播图组件
import {Swiper,SwiperItem} from 'components/common/swiper'
import {getHomeMultidata,getHomeProductdata} from 'network/home'

// 推荐模块
import RecommendView from 'views/home/childComps/RecommendView'
// 本周流行模块
import FeatureView from 'views/home/childComps/FeatureView'
// 商品风格
import TabControl from 'components/content/tabControl/TabControl'
// 商品列表
import GoodList from 'components/content/goods/GoodList'

export default {
  data(){
    return {
      banners:[],
      homerecommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentProStyle:'pop'  // 保存当前商品风格
    }
  } ,
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList
  },
  // 在实例创建完成后调用
  created(){
    // 1.请求多个数据(轮播图、)
    this.getHomeMultidata();

    // 2.请求商品数据(刚刚创建完成，就请求流行(pop)、新品(new)、精选(sell)三个模块的第一页数据)
    this.getHomeProductdata('pop');
    this.getHomeProductdata('new');
    this.getHomeProductdata('sell');
  },
  methods:{
    /* ***
      发送请求相关方法
    */
    getHomeMultidata(){ 
      getHomeMultidata().then(res => {
        // console.log(res);
        // console.log(res.data.banner.list);
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list;          // 轮播图数据
        this.homerecommends = res.data.recommend.list;    // 推荐数据
      });
    },
    getHomeProductdata(type){
      // 根据对应的商品风格类型来获取页码
      let page = this.goods[type].page;
      getHomeProductdata(type,page).then(res => {
        console.log(type + "shuju:");
        console.log(res);
        // 根据对应类型将第一次请求到的数据保存对应数组中
        for(let item of res.list[type]){
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
    change_ProStyle_F(proStyle){
      this.currentProStyle = proStyle
    } 
  }
}
</script>

<style>
  #home{
   padding-top: 44px; 
  }
  .home-navbar{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: deeppink;
  }
  .tab-control{
    position: sticky;   /* sticky表示如果没有到定位的地方就是static定位，如果到了指定的位置就是fiexd定位 */
    top: 44px;
  }
</style>