import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {
      title:'home'
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