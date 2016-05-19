import createServer from './createServer'
import onConnect from './onConnect'
import through from '../../../lib/through'

const servers = []

export default through
  (createServer)
  (server => {
    server.webSocketServer.on('connection', onConnect(server))

    servers.push(server)

    return server
  })
