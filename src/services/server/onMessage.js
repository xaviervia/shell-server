import uuid from 'uuid'

export default socket => message =>
  socket.server.handleMessage({
    socket: {
      key: socket.key,
      server: socket.server.key
    },
    ...JSON.parse(message)
  })
