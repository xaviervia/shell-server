import type { Subscription } from 'redux-subscriptions/types'

export type Action = {
  type: string,
  payload: any,
  meta: any
}

export type Store = {
  getState: () => any,
  dispatch: () => void
}

export type ActionCreator = (...x: any) => Action

export type Reducer = (state: Object, action: Action) => Object

export type Feature = {
  actionTypes: {
    [key: string]: string
  },
  actions: Array<ActionCreator>,
  reducer: Reducer,
  subscriber: Subscription
}
