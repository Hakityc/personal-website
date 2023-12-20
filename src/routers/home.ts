import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    name: 'HomeView',
    path: '/',
    meta: {
      title:'home'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/home/HomeView.vue')
      }
    ]
    
  }
]
export default route