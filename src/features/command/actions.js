// @flow
import { NEW_ERROR, NEW_INPUT} from './types'
import type {
  Error,
  Input,
  NewErrorAction,
  NewInputAction
} from './types'

export const newError = (payload: Error):NewErrorAction => ({
  type: NEW_ERROR,
  payload
})

export const newInput = (payload: Input):NewInputAction => ({
  type: NEW_INPUT,
  payload
})
