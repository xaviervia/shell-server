import { handleActions } from 'redux-actions'
import {
  NEW_CLIENT,
  NEW_COMMAND,
  NEW_SERVER
} from './actionTypes'

const initialState = {
  commands: [],
  sockets: [],
  sessions: {},
  servers: []
}

export default handleActions({
  [NEW_CLIENT]: (state, { type, payload }) => ({
    ...state,
    sockets: [...state.sockets ].concat(payload)
  }),

  [NEW_COMMAND]: (state, { type, payload }) => ({
    ...state,
    commands: [ ...state.commands ].concat(payload),
    sessions: {
      ...state.sessions,
      [payload.session]: payload.socket.key
    }
  }),

  [NEW_SERVER]: (state, { type, payload }) => ({
    ...state,
    servers: [ ...state.servers ].concat(payload)
  })
}, initialState)
