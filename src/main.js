import { createApp } from 'vue'
import App from '@/App.vue'
import '@/utils/flexible.js'
import '@/assets/styles/global.scss'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
// 引入自动生成的svg图标文件
import 'virtual:svg-icons-register'
// 引入i18n
import i18n from "./locales/index.js";

const app = createApp(App)
app.use(i18n)
app.component('SvgIcon', SvgIcon);
app.mount('#app')
