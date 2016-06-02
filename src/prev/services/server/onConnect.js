import uuid from 'uuid'
import onMessage from './onMessage'

export default server => webSocket => {
  const socket = {
    key: uuid.v4(),
    webSocket,
    server
  }

  socket.send = (data) =>
    socket.webSocket.send(JSON.stringify(data))

  server.sockets.push(socket)

  server.handleConnect({
    key: socket.key,
    server: server.key
  })

  webSocket.on('message', onMessage(socket))
}
