export interface Item {
    id: number
    title: string
    description: string
    image: string
    date: string
    author: {
      id: number
      name: string
      avatar: string
    }
    tags: {
      id: number
      name: string
    }[]
    stat: {
      like: number
      comment: number
    }
  }