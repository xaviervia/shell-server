import { Server } from 'ws'

export default ({ id, port }) => ({
  connections: [],
  id,
  webSocketServer: new Server({ port })
})
