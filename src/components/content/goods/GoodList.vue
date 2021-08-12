<template>
  <div class="goods">
      <GoodsListItem v-for="item in goodslist" :key="item.index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodListItem'

export default {
    props:{
        goodslist:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
    .goods{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
        padding: 2px;
    }
</style>