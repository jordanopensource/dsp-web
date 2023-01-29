import http from 'http'

export default function (context) {
  context.res.setHeader('Onion-Location', process.env.ONION_ADDRESS)
}
