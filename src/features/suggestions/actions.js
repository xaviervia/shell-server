import uuid from 'uuid'
import { SET_SUGGESTIONS } from './actionTypes'

export const setSuggestions = (suggestions, context) => ({
  type: SET_SUGGESTIONS,
  payload: {
    suggestions,
    context
  }
})
