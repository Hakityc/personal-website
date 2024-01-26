import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/blog',
    name: 'BlogView',
    meta: {
      title: 'Blog',
      title_cn: '博客'
    },
    children: [
      {
        name: 'BlogView',
        path: '',
        component: () => import('@/views/blog/index.vue')
      }
    ]
  }
]
export default route
