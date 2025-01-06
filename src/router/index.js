//引入router路由做页面请求
import { createRouter,createWebHashHistory } from 'vue-router'
/* Layout通用组件 */
import Layout from '@/views/layout/index.vue'
//前端页面路由地址
const routes = [
//   {path: '/404', component: () => import('@/views/404')},
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {title: '首页', icon: 'home'}
      },
    //   {
    //     path: 'hello',
    //     name: 'hello',
    //     component: () => import('@/components/HelloWorld'),
    //     meta: {title: '测试页', icon: 'hello'}
    //   }
    ]
  }
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

//路由前置守卫
router.beforeEach((to, from, next) => {
  //路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

//导出路由
export default router

