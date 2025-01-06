import { createApp } from 'vue'
import App from '@/App.vue'
import '@/utils/flexible.js'
import '@/assets/styles/global.scss'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
// 引入自动生成的svg图标文件
import 'virtual:svg-icons-register'

const app = createApp(App)
app.component('SvgIcon', SvgIcon);
app.mount('#app')
