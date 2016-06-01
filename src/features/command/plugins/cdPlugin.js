import { readdirSync, statSync } from 'fs'
import path from 'path'
import uuid from 'uuid'
import { newStdOutput, newStdError, newSuggestions } from '../actions'

export const onNewCommand = (
  { command,  workingDirectory, key },
  state,
  dispatch
) => {
  if (command[0] === 'cd') {
    const resolvedNewPath = path.resolve(
      workingDirectory,
      command[1][0]
    )

    try {
      const stats = statSync(resolvedNewPath)

      return newStdOutput({
        key: uuid.v4(),
        command: key,
        data: `New working directory: ${resolvedNewPath}`,
        workingDirectory: resolvedNewPath
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

export const onUserInput = (command, { server }, dispatch) => {
  try {
    if (command[0] === 'cd') {
      const dirs = readdirSync(path.resolve(server.workingDirectory))
        .filter((file) =>
          statSync(path.resolve(server.workingDirectory, file)).isDirectory()
        )
        .filter((dir) => command[1][0]
          ? dir.includes(command[1][0])
          : true
        )
        .map((dir) => ({
          key: path.resolve(server.workingDirectory, dir),
          name: dir,
          absolutePath: path.resolve(server.workingDirectory, dir),
          type: 'directory'
        }))

      process.nextTick(
        () => dispatch(newSuggestions(dirs, { command: server.pendingCommand }))
      )
    }
  } catch (e) {
    console.error('Autocompletion failed', e.message, e.stack)
  }
}
