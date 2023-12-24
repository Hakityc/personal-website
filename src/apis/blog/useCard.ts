import { useFetch }from'@/hooks/common/useFetch'
import { Item } from '@/models/blog/card'

export const useCardList = () => {
  return useFetch(true).get<{
    items:Item[]
  }>('/card/list')
}