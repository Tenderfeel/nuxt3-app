import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { createError } from 'h3'

export default async () => {
  const filePath = resolve('src/server/data/todos.json')

  let todos: Todo[] = []

  try {
    todos = JSON.parse(readFileSync(filePath, 'utf-8'))

    return todos

  } catch (e) {
    return createError({statusCode: 500, statusMessage: 'Failed to load'})
  }
}