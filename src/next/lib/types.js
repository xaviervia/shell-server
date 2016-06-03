export type Key = string

export type Action = {
  type: string,
  payload: any,
  meta: any
}

export type Dispatcher = (action: Action) => any
