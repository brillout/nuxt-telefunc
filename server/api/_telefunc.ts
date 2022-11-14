import { telefunc } from 'telefunc'

export default eventHandler(async (event) => {
  const url = event.req.url!
  const method = getMethod(event)
  const body = await readRawBody(event)

  const { statusCode, body: result } = await telefunc({ url, method, body: body as string })
  event.res.statusCode = statusCode
  return result
})
