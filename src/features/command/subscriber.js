import { startProcess } from '../../services/process'
import { newInput, newError } from './actions'

const commandsSelector = (state) =>
  state &&
  state.server &&
  state.server.commands

export default ({ getDiff, dispatch }) => {
  const [_, newCommands] = getDiff(commandsSelector) || []

  if (newCommands) {
    newCommands.map(command => {
      const process = startProcess(command)

      process.handleInput = (input) => dispatch(newInput(input))
      process.handleError = (error) => dispatch(newError(error))
    })
  }
}
