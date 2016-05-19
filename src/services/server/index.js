import createServer from './createServer'
import onConnect from './onConnect'
import through from '../../lib/through'

const servers = []

export const startServer = through
  (createServer)
  (server => {
    server.webSocketServer.on('connection', onConnect(server))

    servers.push(server)

    return server
  })

export const getServer = (id) =>
  servers.find(server => server.id === id)

export const getSocket = (id) =>
  servers
    .reduce((sockets, server) => sockets.concat(server.sockets), [])
    .find(socket => socket.id === id)
