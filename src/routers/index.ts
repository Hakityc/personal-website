import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import home from './home'

const routes: RouteRecordRaw[] = [
  ...home
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = async (app: any) => {
  app.use(router)
  await router.isReady()
}
