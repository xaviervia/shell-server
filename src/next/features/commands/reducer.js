import type { State } from './types'
import type { Action } from '../../lib/types'
import { ADD_COMMAND, ADD_INPUT, ADD_ERROR } from './types'

const initialState: State = []

export default (state: State, { type, payload }:Action):State => {
  switch (type) {
    case ADD_COMMAND:
      return [
        ...state,
        {
          ...payload,
          input: '',
          output: '',
          error: ''
        }
      ]

    case ADD_INPUT:
      return [
        ...state.map(
          (command) => command.key === payload.command
            ? {
              ...command,
              input: command.input + payload.value
            }
            : command
        )
      ]

    case ADD_ERROR:
      return [
        ...state.map(
          (command) => command.key === payload.command
            ? {
              ...command,
              error: command.error + payload.value
            }
            : command
        )
      ]

    default:
      return initialState
  }
}
