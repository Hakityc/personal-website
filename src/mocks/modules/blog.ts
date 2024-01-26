import { MockType } from '../index.d'

const mocks: MockType[] = [
  {
    url: '/api/articles',
    method: 'get',
    response: {
      code: 0,
      message: '',
      data: {
        'items|10': [
          {
            'id|+1': 1,
            title: '@ctitle',
            content: '@cparagraph',
            author: '@cname',
            date: '@date',
            image: '@image(100x100)'
          }
        ]
      }
    }
  }
]

export default mocks
