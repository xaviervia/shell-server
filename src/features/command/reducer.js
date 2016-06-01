// @flow
import { handleActions } from 'redux-actions'
import { NEW_ERROR, NEW_INPUT } from './types'
import type { NewErrorAction, NewInputAction, State } from './types'
import type { Action } from '../../types/redux'

const initialState: State = {
  inputs: [],
  errors: []
}

export default handleActions({
  [NEW_ERROR]: (
    state: State,
    { type, payload }: NewErrorAction
  ): State => ({
    ...state,
    errors: [...state.errors ].concat(payload)
  }),

  [NEW_INPUT]: (
    state: State,
    { type, payload }: NewInputAction
  ): State => ({
    ...state,
    inputs: [...state.inputs ].concat(payload)
  })
}, initialState)
