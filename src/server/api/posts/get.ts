import type { IncomingMessage, ServerResponse } from 'http'
import { getQuery } from 'ufo'
import { posts } from '../../services/posts'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { id } = getQuery(req.url as string)
  return Object.values(posts).find(post => post.id === parseInt(id as string))
}