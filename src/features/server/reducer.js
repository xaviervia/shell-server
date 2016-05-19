import { handleActions } from 'redux-actions'
import {
  NEW_CLIENT,
  NEW_COMMAND,
  NEW_SERVER
} from './actionTypes'

const initialState = {
  commands: [],
  connections: [],
  servers: []
}

export default handleActions({
  [NEW_CLIENT]: (state, { type, payload }) => ({
    ...state,
    connections: [...state.connections ].concat(payload)
  }),

  [NEW_COMMAND]: (state, { type, payload }) => ({
    ...state,
    commands: [ ...state.commands ].concat(payload)
  }),

  [NEW_SERVER]: (state, { type, payload }) => ({
    ...state,
    servers: [ ...state.servers ].concat(payload)
  })
}, initialState)
