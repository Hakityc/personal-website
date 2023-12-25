import { axios } from '@/apis/axios'
import { useFetch } from '@/hooks/common/useFetch'
import { Item } from '@/models/blog/tag'

/**
 * 博客-获取标签列表
  GET /blog/tags
  接口ID：136420521
  接口地址：https://app.apifox.com/link/project/3808301/apis/api-136420521
 */
export const useTagList = () => {
  return useFetch(true).get<Item[]>('/blog/tags')
}