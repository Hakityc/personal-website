import { useFetch }from'@/hooks/common/useFetch'
import { Item } from '@/models/blog/card'

/**
 * 博客-获取博客列表
  GET /blog/cards
  接口ID：136164392
  接口地址：https://app.apifox.com/link/project/3808301/apis/api-136164392
 */
export const useCardList = () => {
  return useFetch(true).get<{
    items:Item[]
  }>('/card/list')
}