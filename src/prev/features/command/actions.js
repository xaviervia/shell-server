import {
  NEW_STD_ERROR,
  NEW_STD_OUTPUT
} from './actionTypes'

export const newStdError = (payload) => ({
  type: NEW_STD_ERROR,
  payload
})

export const newStdOutput = (payload) => ({
  type: NEW_STD_OUTPUT,
  payload
})
