export default socket => message =>
  socket.server.handleMessage({
    socket: {
      id: socket.id,
      server: socket.server.id
    },
    data: message 
  })
