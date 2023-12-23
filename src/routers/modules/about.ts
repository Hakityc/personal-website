import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'AboutView',
    meta: {
      title: 'About',
      title_cn:'关于'
    },
    children: [
      {
        name: 'AboutView',
        path: '',
        component: () => import('@/views/about/AboutView.vue')
      }
    ]
    
  }
]
export default route