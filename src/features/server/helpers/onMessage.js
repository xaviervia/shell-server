import uuid from 'uuid'

export default socket => message =>
  socket.server.handleMessage({
    socket: {
      id: socket.id,
      server: socket.server.id
    },
    ...JSON.parse(message)
  })
