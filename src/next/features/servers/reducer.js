import type { State } from './types'
import type { Action } from '../../lib/types'
import { ADD_SERVER, ADD_CLIENT } from './types'

const initialState: State = []

export default (state: State, { type, payload }:Action):State => {
  switch (type) {
    case ADD_SERVER:
      return [
        ...state,
        payload
      ]

    case ADD_CLIENT:
      return [
        ...state.map(
          (server) => server.key === payload.server
            ? {
              ...server,
              clients: [
                ...server.clients,
                { key: payload.key }
              ]
            }
            : server
        )
      ]

    default:
      return initialState
  }
}
