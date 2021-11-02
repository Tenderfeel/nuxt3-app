import { readFileSync } from 'fs'
import { resolve } from 'path'


const filePath = resolve('src/server/data/users.json')

let users: User[] = []

try {
  users = JSON.parse(readFileSync(filePath, 'utf-8'))
} catch (e) {
  console.error('[USERS]', e)
}

export {
  users
}