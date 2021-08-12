<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        // 保存推荐的数据
        recommends:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        font-size: 14px;
        padding: 15px 0px 20px 0px;
        border-bottom: 10px solid #eee;
    }

    .recommend-item{
        flex: 1;
        text-align: center;
    }
    .recommend-item img{
        width: 65px;
        margin-bottom: 6px;
    }
</style>