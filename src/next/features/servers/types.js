import type { Key } from '../../lib/types'

export type Client = {
  key: Key,
  session: ?Key
}

export type Server = {
  key: Key,
  port: number,
  clients: {
    [key: string]: Client
  }
}

export type State = Array<Server>

export const ADD_SERVER = 'servers/ADD_SERVER'

export type AddServer = {
  type: string,
  payload: Server
}

export const ADD_CLIENT = 'servers/ADD_CLIENT'

export type AddClient = {
  type: string,
  payload: {
    key: Key,
    server: Key
  }
}
