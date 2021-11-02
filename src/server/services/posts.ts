import { readFileSync } from 'fs'
import { resolve } from 'path'

const filePath = resolve('src/server/data/posts.json')

let posts: Post[] = []

try {
  posts = JSON.parse(readFileSync(filePath, 'utf-8'))
} catch (e) {
  console.error('[POSTS]', e)
}

export {
  posts
}