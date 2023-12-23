import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    meta: {
      title: 'Home',
      title_cn: '首页',
    },
    children: [
      {
        name: 'HomeView',
        path: '',
        component: () => import('@/views/home/HomeView.vue')
      }
    ]
    
  }
]
export default route