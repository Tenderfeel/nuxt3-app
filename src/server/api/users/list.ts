import { users } from '../../services/users'

export default async () => {
  return Object.values(users)
}