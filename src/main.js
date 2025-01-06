import { createApp } from 'vue'
import App from '@/App.vue'
import '@/utils/flexible.js'
import '@/assets/styles/global.scss'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
// 引入自动生成的svg图标文件
import 'virtual:svg-icons-register'
// 引入i18n
import i18n from "./locales/index.js"
//引入router路由
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// pinia数据持久化
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(pinia)
app.component('SvgIcon', SvgIcon);
app.mount('#app')
