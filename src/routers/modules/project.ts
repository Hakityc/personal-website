import { RouteRecordRaw } from "vue-router"

const route: RouteRecordRaw[] = [
  {
    path: '/project',
    name: 'ProjectView',
    meta: {
      title: 'Project',
      title_cn: '项目',
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