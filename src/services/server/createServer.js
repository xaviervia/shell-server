import { Server } from 'ws'

export default ({ key, port }) => ({
  sockets: [],
  key,
  webSocketServer: new Server({ port })
})
