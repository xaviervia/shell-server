import { handleActions } from 'redux-actions'
import {
  NEW_STD_ERROR,
  NEW_STD_OUTPUT
} from './actionTypes'

const initialState = {
  inputs: [],
  errors: [],
  suggestions: []
}

export default handleActions({
  [NEW_STD_ERROR]: (state, { type, payload }) => ({
    ...state,
    errors: [...state.errors ].concat(payload)
  }),

  [NEW_STD_OUTPUT]: (state, { type, payload }) => ({
    ...state,
    inputs: [...state.inputs ].concat(payload)
  })
}, initialState)
