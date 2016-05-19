import uuid from 'uuid'
import onMessage from './onMessage'

export default server => webSocket => {
  const socket = {
    id: uuid.v4(),
    webSocket,
    server
  }

  socket.send = (data) =>
    socket.webSocket.send(JSON.stringify(data))

  server.sockets.push(socket)

  server.handleConnect({
    id: socket.id,
    server: server.id
  })

  webSocket.on('message', onMessage(socket))
}
