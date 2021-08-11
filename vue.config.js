module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // @表示src
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },// 第三方插件配置
    // pluginOptions: {
    //     'process.env':{
    //         NODE_ENV:'"development"'
    //     }
    // }
}