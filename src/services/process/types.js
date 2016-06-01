type Process = {
  key: string,
  command: string,
  session: string,
  process: any,
  input: Array<Input>,
  error: Array<Error>,
  handleError: function,
  handleInput: function
}

type ProcessHandlers = {
  handleError: function,
  handleInput: function
}
