import type { Key } from '../../lib/types'

export type Command = {
  key: Key,
  input: string,
  workingDirectory: string,
  output: string,
  error: string,
  session: Key
}

export type State = Array<Command>

export const ADD_COMMAND = 'commands/ADD_COMMAND'

export type AddCommand = {
  type: string,
  payload: {
    input: string,
    workingDirectory: string,
    session: Key
  }
}

export const ADD_INPUT = 'commands/ADD_INPUT'

export type AddInput = {
  type: string,
  payload: {
    value: string,
    command: Key
  }
}

export const ADD_ERROR = 'commands/ADD_ERROR'

export type AddError = {
  type: string,
  payload: {
    value: string,
    command: Key
  }
}
