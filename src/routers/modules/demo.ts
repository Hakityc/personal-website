import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'Demo',
      title_cn: '代码',
      index: 3,
      show: true
    },
    children: [
      {
        name: 'DemoView',
        path: '',
        component: () => import('@/views/demo/index.vue')
      }
    ]
  }
]

export default routes
