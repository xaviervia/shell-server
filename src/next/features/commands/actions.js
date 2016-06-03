import { ADD_COMMAND, ADD_ERROR, ADD_INPUT } from './types'
import type { AddCommand, AddError, AddInput } from './types'
import type { Key } from '../../lib/types'

export const addCommand = (
  input: string,
  workingDirectory: string,
  session: Key
):AddCommand => ({
  type: ADD_COMMAND,
  payload: {
    input,
    workingDirectory,
    session
  }
})

export const addError = (error: string, command: Key):AddError => ({
  type: ADD_ERROR,
  payload: {
    value: error,
    command
  }
})

export const addInput = (input: string, command: Key):AddInput => ({
  type: ADD_INPUT,
  payload: {
    value: input,
    command
  }
})
