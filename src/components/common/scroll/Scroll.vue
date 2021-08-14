<template>
    <div class="wrapper" ref="wrapper">
        <div class="contentScroll">
            <slot></slot> 
        </div>
    </div>
</template>

<script>
// 导入better-scroll组件
import BScroll from '@better-scroll/core'
// // 导入上拉刷新组件
import Pullup from '@better-scroll/pull-up'

// better-scroll引用上拉刷新
BScroll.use(Pullup)

export default {
    props:{
        // 此属性表示是否监听滚动条
        probeTypeNum:{
            type:Number,
            default:0
        },
        // 此属性表示是否开启下拉刷新
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    // 因为加载这个插件时，DOM还没加载，所以放入在mounted中无法滚动
    updated(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeTypeNum,    // 根据对应传入的值来确定是否要滚动
            click:true,
            pullUpLoad:this.pullUpLoad     // 是否监听上拉加载
        });

        // 监听滚动事件
        this.scroll.on('scroll',(position)=>{
            // 只要位置被移动就将位置发送给父组件
            this.$emit('scroll',position);
        })

        // 监听上拉加载事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('loadMore');         // 监测到上拉刷新事件后，发送给父组件
            this.scroll.finishPullUp();     // 结束下拉加载行为，开启下一次的上拉
            // 因为下拉加载更多后，better-scroll没有识别这些重新加载的数据，所以
            // 要使用refresh()重新加载一下better-scroll即可
            setTimeout(() => {
                this.scroll.refresh();
            }, 100);

        })
    },
    methods:{
        scrollTo(x,y,time = 300){   // time = 300表示是默认值，如果不传值给time就是用默认值
            this.scroll.scrollTo(x,y,time);     // scroll对象的scrollTo()表示按指定时间跳转到指定位置
        }
    }
}
</script>

<style>

</style>