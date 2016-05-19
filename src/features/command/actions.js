import {
  NEW_ERROR,
  NEW_INPUT
} from './actionTypes'

export const newError = (payload) => ({
  type: NEW_ERROR,
  payload
})

export const newInput = (payload) => ({
  type: NEW_INPUT,
  payload
})
