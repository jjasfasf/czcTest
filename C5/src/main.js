import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 通过 use 引入 路由实例。
app.use(router)
// 将实例挂载到 #app 节点上。
app.mount('#app')
