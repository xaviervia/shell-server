import uuid from 'uuid'
import {
  NEW_CLIENT,
  NEW_COMMAND,
  NEW_SERVER
} from './actionTypes'

export const newClient = (payload) => ({
  type: NEW_CLIENT,
  payload
})

export const newCommand = (payload) => ({
  type: NEW_COMMAND,
  payload
})

export const newServer = (port) => ({
  type: NEW_SERVER,
  payload: {
    id: uuid.v4(),
    port
  }
})
