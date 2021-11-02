interface PaginationItem {
  id: Number
}

interface Post extends PaginationItem {
  id: number
  userId: number
  title: string
  body: string
}

interface User extends PaginationItem {
  id: number
  name: string
  username: string
  email: string
  website: string
}

interface Todo extends PaginationItem {
  id: number
  body: string
  updatedAt: Date
}