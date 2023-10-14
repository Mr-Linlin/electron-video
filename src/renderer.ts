import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index'
import { createPinia } from 'pinia'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

import '@/assets/css/index.scss'
import './index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vue3videoPlay)
app.mount('#app')