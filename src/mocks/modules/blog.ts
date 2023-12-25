import { MockType } from '../index.d'
import { Item } from '@/models/blog/card'

// const handleMock = <T>(url:string,method:string,mockStr:string,isError?:boolean,message?:string) => {
//   return {
//     url: url,
//     method: method,
//     response: () => {
//       if (isError) {
//         return {
//           code: 1,
//           data: null,
//           message: message || 'error'
//         }
//       }
//       return 
//     }
//   }
// }

const mocks: MockType[] = [
  {
    url: '/api/blog/cards',
    method: 'get',
    response: {
      code: 0,
      message: '',
      data: {
        'items|10': [{
          'id|+1': 1,
          'title': '@ctitle',
          'content': '@cparagraph',
          'author': '@cname',
          'date': '@date',
          'image': '@image(100x100)'
        }]
      }
    }
  }
]

export default mocks