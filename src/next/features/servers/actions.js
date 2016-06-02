import { ADD_SERVER, ADD_CLIENT } from './types'
import type { AddServerAction, AddClientAction } from './types'
import type { Key } from '../../lib/types'
import uuid from 'uuid'

export const addServer = (port: number):AddServer => ({
  type: ADD_SERVER,
  payload: {
    key: uuid.v4(),
    port,
    clients: []
  }
})

export const addClient = (key: Key, server: Key):AddClient => ({
  type: ADD_CLIENT,
  payload: {
    key,
    server
  }
})
