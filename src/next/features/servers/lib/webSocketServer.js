import { Server } from 'ws'
import uuid from 'uuid'

const servers = {}

type OnConnection = (clientKey: string, serverKey: string) => void
type OnMessage = (clientKey: string) => (data: any) => void

export type CreateServerArgs = {
  key: string,
  port: number,
  onConnection: OnConnection,
  onMessage: OnMessage
}

export const createServer = ({ key, port, onConnection, onMessage }:CreateServerArgs) => {
  servers[key] = {
    port,
    key,
    instance: new Server({ port }),
    clients: {}
  }

  servers[key].instance.on(
    'connection',
    createClient({
      onConnection,
      onMessage,
      server: {
        ...servers[key],
        key
      }
    })
  )

  return servers
}

export type CreateClientArgs = {
  onConnection: OnConnection,
  onMessage: OnMessage,
  server: any
}

export const createClient = ({ onConnection, onMessage, server }:CreateClientArgs) => (webSocket: any) => {
  const key = uuid.v4()

  server.clients[key] = {
    instance: webSocket
  }

  onConnection(key, server.key)

  webSocket.on('message', onMessage(key, server.key))
}
