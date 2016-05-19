import uuid from 'uuid'
import onMessage from './onMessage'

export default server => webSocket => {
  const socket = {
    id: uuid.v4(),
    webSocket,
    server
  }

  server.connections.push(socket)

  server.handleConnect({
    id: socket.id,
    server: server.id
  })

  webSocket.on('message', onMessage(socket))
}
