<template>
    <div class="goodlistitem">
        <img :src="goodsItem.productImage" alt="">
        <div class="goodsInfo">
            <p>{{goodsItem.productName}}</p>
            <span class="price">{{AccessPrice}}</span>
            <i class="starsvg"></i>
            <span class="fav">{{goodsItem.productFav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    computed:{
        // 给价格加上2位小数
        AccessPrice(){
            return this.goodsItem.price.toFixed(2);
        }
    }
}
</script>

<style>
    .goodlistitem{
        /* flex: 1; */
        width: 48%;
        min-width:48%;
        padding-bottom: 20px;
    }
    .goodlistitem img{
        width: 100%;
        border-radius: 7px;
    }
    
    .goodsInfo{
        font-size: 13px;
        text-align: center;
    }

    .goodsInfo p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .goodsInfo .price{
        color:#FF1493;
        margin-right: 5px;
    }

    .goodsInfo .starsvg{
        display: inline-block;
        width: 16px;
        height: 16px;
        /* background: url('~assets/img/collect_icon.png') no-repeat 0 0/14px 15px; */
        background-image: url('~assets/img/collect_icon.png');
        background-repeat: no-repeat;
        background-position: -1px 4px;
        background-size: 14px;
    }
</style>