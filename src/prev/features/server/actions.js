import uuid from 'uuid'
import {
  NEW_CLIENT,
  NEW_COMMAND,
  NEW_USER_INPUT,
  ADD_SOCKET_TO_SESSION,
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

export const newUserInput = (payload) => ({
  type: NEW_USER_INPUT,
  payload
})

export const newServer = (port) => ({
  type: NEW_SERVER,
  payload: {
    key: uuid.v4(),
    port
  }
})

export const addSocketToSession = (sessionKey, socketKey) => ({
  type: ADD_SOCKET_TO_SESSION,
  payload: {
    session: sessionKey,
    socket: socketKey
  }
})
