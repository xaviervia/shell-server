import { startProcess } from '../../services/process'
import { newStdOutput, newStdError } from './actions'
import get from '../../lib/get'
import * as cdPlugin from '../../plugins/cdPlugin'
import breakdownCommand from '../../lib/breakdownCommand'
import { magenta } from 'chalk'

export default ({ newState, getDiff, dispatch }) => {
  const commandsDiff = getDiff(get('server.commands'))
  const pendingCommandDiff = getDiff(get('server.pendingCommand'))

  commandsDiff.after &&
  commandsDiff.after.map(command => {
    const parsedCommand = {
      ...command,
      command: breakdownCommand(command.command)
    }
    const stdOutputAction = cdPlugin.onNewCommand(parsedCommand, newState)

    if (!stdOutputAction) {
      const process = startProcess(parsedCommand)

      process.handleInput = (input) => dispatch(newStdOutput(input))
      process.handleError = (error) => dispatch(newStdError(error))
    } else {
      process.nextTick(() => dispatch(stdOutputAction))
    }
  })
}
