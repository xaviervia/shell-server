import type { State } from './types'
import type { Action } from '../../lib/types'
import { ADD_SESSION, SET_SUGGESTIONS } from './types'

const initialState: State = []

export default (state: State, { type, payload }:Action):State => {
  switch (type) {
    case ADD_SESSION:
      return [
        ...state,
        ...payload
      ]

    case SET_SUGGESTIONS:
      return [
        ...state.map(
          (session) => session.key === payload.session
            ? {
              ...session,
              suggestions: {
                context: payload.context,
                entries: payload.entries
              }
            }
            : session
        )
      ]

    default:
      return initialState
  }
}
