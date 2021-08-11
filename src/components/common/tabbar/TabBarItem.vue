<template>
  <div class="tab-bar-item" @click="itemclick">
      <!-- 使用具名插槽 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :style="{color:isActiveColor}"><slot name="item-text"></slot></div> -->
      <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // isActive:false
        }
    },
    // 接收父组件发送过来的值
    props:{
        link:String,
        // 活跃路由的颜色
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            // 判断当前活跃的路由是否等于传入过来的路由
            return this.$route.path == this.link;
        },
        isActiveColor(){
            // 判断路由是否是活跃的
            // return this.isActive ? this.activeColor : '' ;  
            return this.isActive ? {color:this.activeColor} : {} ;
        }
    },
    methods:{
        itemclick(){
            if(this.$route.path == this.link) return;
            // 使用代码跳转路由
            this.$router.replace(this.link)
        }
    }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
  }
  .active{
      color: #FA554A;
  }
</style>