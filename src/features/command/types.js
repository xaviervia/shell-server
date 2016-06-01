export const NEW_INPUT = 'command/NEW_INPUT'

export const NEW_ERROR = 'command/NEW_ERROR'

export type CommandSocket = {
  key: string,
  server: string
}

export type Command = {
  command: string,
  key: string,
  session: string,
  socket: CommandSocket
}

export type Input = {
  key: string,
  command: string,
  data: string
}

export type NewInputAction = {
  type: 'command/NEW_INPUT',
  payload: Input
}

export type Error = Input

export type NewErrorAction = {
  type: 'command/NEW_ERROR',
  payload: Error
}

export type State = {
  inputs: Array<Input>,
  errors: Array<Error>
}
