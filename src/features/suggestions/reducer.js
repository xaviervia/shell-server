import { handleActions } from 'redux-actions'
import { SET_SUGGESTIONS } from './actionTypes'

const initialState = {
  suggestions: {}
}

export default handleActions({
  [SET_SUGGESTIONS]: (state, { type, payload }) => ({
    ...state,
    suggestions: {
      context: payload.context,
      entries: payload.suggestions
    }
  })
}, initialState)
