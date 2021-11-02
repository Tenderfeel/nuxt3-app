import type { IncomingMessage, ServerResponse } from 'http'
import { getQuery } from 'ufo'
import { users } from '../../services/users'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { id } = getQuery(req.url as string)
  return Object.values(users).find(user => user.id === parseInt(id as string))
}