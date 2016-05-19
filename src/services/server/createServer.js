import { Server } from 'ws'

export default ({ id, port }) => ({
  sockets: [],
  id,
  webSocketServer: new Server({ port })
})
