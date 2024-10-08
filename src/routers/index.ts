import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import home from './modules/home'
// import blog from './modules/blog'
// import project from './modules/project'
// import about from './modules/about'
import { getModulesRoutes } from '@/utils/router'

import nProgress from 'nprogress'

const routes: RouteRecordRaw[] = [...getModulesRoutes()]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = async (app: any) => {
  app.use(router)
  await router.isReady()
}

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})
router.afterEach(() => {
  nProgress.done()
})
