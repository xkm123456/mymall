// import Vue from 'vue'
// // 1.导入路由
// import VueRouter from 'vue-router'

// // 2.安装插件
// Vue.use(VueRouter)


import {createRouter, createWebHistory} from 'vue-router'



const Home = () => import('@/views/home/Home')
const Classify = () => import('@/views/classify/Classify')
const Cart = () => import('@/views/cart/Cart')
const Mine = () => import('@/views/mine/Mine')


// 3.创建router
const routes = [    
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/mine',
        component:Mine
    },
]

// const router = new VueRouter({
//     routes,
//     mode:'history'
// })
 
const routerHistory = createWebHistory()
 
const router = createRouter({
    history: routerHistory,
    routes
})
// 4.导出router
export default router