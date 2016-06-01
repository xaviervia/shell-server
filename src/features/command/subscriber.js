import { startProcess } from '../../services/process'
import { newStdOutput, newError } from './actions'
import get from '../../lib/get'
import { statSync } from 'fs'
import { red, green } from 'chalk'
import path from 'path'
import uuid from 'uuid'

const breakdownCommand = (line) => {
  const [command, ...args] = line.split(' ')

  return [
    command,
    args
  ]
}

const cdPlugin = ({ command,  currentWorkingDirectory, key }, state, dispatch) => {
  if (command[0] === 'cd') {
    const resolvedNewPath = path.resolve(
      currentWorkingDirectory,
      command[1][0]
    )

    try {
      const stats = statSync(resolvedNewPath)

      return newStdOutput({
        key: uuid.v4(),
        command: key,
        data: `New working directory: ${resolvedNewPath}`,
        currentWorkingDirectory: resolvedNewPath
      })
    } catch (e) {
      return newStdOutput({
        key: uuid.v4(),
        command: key,
        data: `Failed to cd to ${resolvedNewPath}`
      })
    }
  }
}

export default ({ newState, getDiff, dispatch }) => {
  const commandsDiff = getDiff(get('server.commands'))

  commandsDiff.after &&
  commandsDiff.after.map(command => {
    const parsedCommand = {
      ...command,
      command: breakdownCommand(command.command)
    }
    const stdOutputAction = cdPlugin(parsedCommand, newState, dispatch)

    if (!stdOutputAction) {
      const process = startProcess(parsedCommand)

      process.handleInput = (input) => dispatch(newStdOutput(input))
      process.handleError = (error) => dispatch(newError(error))
    } else {
      process.nextTick(() => dispatch(stdOutputAction))
    }
  })
}
