import type { IncomingMessage, ServerResponse } from 'http'
import { getQuery } from 'ufo'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { createError } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const filePath = resolve('src/server/data/todos.json')

  try {

    const buffers = [];

    for await (const chunk of req) {
      buffers.push(chunk);
    }

    let body = Buffer.concat(buffers).toString();

    if (!body) {
      body = '[]'
    }

    writeFileSync(filePath, body)

    return body

  } catch(e) {
    console.error('[TODO]', e)
    return createError({statusCode: 500, statusMessage: 'Failed to save'})
  }

}