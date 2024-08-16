import { RouteRecordRaw } from 'vue-router'

export const getModulesRoutes = () => {
  const modules = import.meta.glob('@/routers/modules/*.ts', { eager: true })
  console.log('modules :>> ', Object.values(modules))
  const routesModules: RouteRecordRaw[] = Object.values(modules)
    .map((module: any) => module.default)
    .sort((a: any, b: any) => a[0].meta.index - b[0].meta.index)
    .filter((module: any) => module[0].meta.show)
    .flat()
  console.log('routesModules :>> ', routesModules)
  return routesModules
}
