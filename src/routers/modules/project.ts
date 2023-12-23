import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/project',
    name: 'ProjectView',
    meta: {
      title:'项目'
    },
    children: [
      {
        name: 'ProjectView',
        path: '',
        component: () => import('@/views/project/ProjectView.vue')
      }
    ]
    
  }
]
export default route