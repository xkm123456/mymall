import { createApp, devtools } from 'vue'
import App from './App.vue'
import router from './router/index'

// use()添加路由
createApp(App).use(router).mount('#app')

