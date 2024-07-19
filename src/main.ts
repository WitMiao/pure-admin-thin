import { MotionPlugin } from '@vueuse/motion'
import type { Directive } from 'vue'
import VueTippy from 'vue-tippy'
// 全局注册@iconify/vue图标库
import {
  FontIcon,
  IconifyIconOffline,
} from './components/ReIcon'
import router from './router'
import 'uno.css'
import App from './App.vue'
import { getPlatformConfig } from './config'
import { setupStore } from '@/store'
import { useEcharts } from '@/plugins/echarts'
import { injectResponsiveStorage } from '@/utils/responsive'
// import Table from "@pureadmin/table";
// import PureDescriptions from "@pureadmin/descriptions";

// 引入重置样式
import './style/reset.scss'
import './style/index.scss'
// 一定要在main.ts中导入unocss.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import './style/unocss.css'
// 导入字体图标
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

// 自定义指令
import * as directives from '@/directives'

// 全局注册按钮级别权限组件
import { Auth } from '@/components/ReAuth'

// 全局注册vue-tippy
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const app = createApp(App)
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
app.component('IconifyIconOffline', IconifyIconOffline)
app.component('FontIcon', FontIcon)
app.component('Auth', Auth)

app.use(VueTippy)

getPlatformConfig(app).then(async (config) => {
  setupStore(app)
  app.use(router)
  await router.isReady()
  injectResponsiveStorage(app, config)
  app.use(MotionPlugin)
    .use(useEcharts)
  // .use(PureDescriptions)
  app.mount('#app')
})
