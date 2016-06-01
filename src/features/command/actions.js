import {
  NEW_STD_ERROR,
  NEW_STD_OUTPUT,
  NEW_SUGGESTIONS
} from './actionTypes'

export const newStdError = (payload) => ({
  type: NEW_STD_ERROR,
  payload
})

export const newStdOutput = (payload) => ({
  type: NEW_STD_OUTPUT,
  payload
})

export const newSuggestions = (suggestions, context) => ({
  type: NEW_SUGGESTIONS,
  payload: {
    suggestions,
    context
  }
})
