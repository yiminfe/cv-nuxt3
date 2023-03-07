export default defineEventHandler(event => {
  const { node } = event
  const { res } = node
  res.setHeader('Access-Control-Allow-Origin', '*')
})
