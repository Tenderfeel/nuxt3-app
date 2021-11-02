import { posts } from '../../services/posts'

export default async () => {
  return Object.values(posts)
}