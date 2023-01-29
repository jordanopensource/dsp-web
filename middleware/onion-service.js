import http from 'http'

export default function (context) {
  if (process.server) {
    // const { req, res, beforeNuxtRender } = context
    context.res.setHeader('Onion-Location', process.env.ONION_ADDRESS)
  }
}
