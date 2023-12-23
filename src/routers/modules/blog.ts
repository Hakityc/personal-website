import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/blog',
    name: 'BlogView',
    meta: {
      title:'博客'
    },
    children: [
      {
        name: 'BlogView',
        path: '',
        component: () => import('@/views/blog/BlogView.vue')
      }
    ]
    
  }
]
export default route