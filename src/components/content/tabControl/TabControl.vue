<template>
  <div class="tab-control">
    <!-- 因为只有文字被改变，所以可以不使用插槽 -->
    <div v-for="(item, index) in title" :key="item.index" 
      class="tab-control-item" @click="chooseCurrentPStyle(index)">
        <span :class="{active:currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data()
    {
      return {
        currentIndex:0,
        pstyle:['pop','new','sell']
      }
    },
    props:{
        title:{
            type:Array,
            default:[]
        }
    },
    methods:{
      chooseCurrentPStyle(index){
        this.currentIndex = index;
        // 使用自定义事件，将要显示哪种风格数据发送到父组件中
        this.$emit("change_ProStyle",this.pstyle[index]);
      }
    }
}
</script>

<style>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    background-color: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding:5px;
  }

  .active{
    border-bottom: 2px solid #FF1493;
    color:#FF1493;
  }
</style>