import { handleActions } from 'redux-actions'
import {
  NEW_ERROR,
  NEW_INPUT
} from './actionTypes'

const initialState = {
  inputs: [],
  errors: []
}

export default handleActions({
  [NEW_ERROR]: (state, { type, payload }) => ({
    ...state,
    errors: [...state.errors ].concat(payload)
  }),

  [NEW_INPUT]: (state, { type, payload }) => ({
    ...state,
    inputs: [...state.inputs ].concat(payload)
  })
}, initialState)
