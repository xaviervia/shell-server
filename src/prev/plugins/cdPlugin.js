import { readdirSync, statSync } from 'fs'
import path from 'path'
import uuid from 'uuid'
import commandFeature from '../features/command'
import suggestionsFeature from '../features/suggestions'

export const onNewCommand = ({ command,  workingDirectory, key }, state) => {
  if (command[0] === 'cd') {
    const resolvedNewPath = path.resolve(
      workingDirectory,
      command[1][0]
    )

    try {
      const stats = statSync(resolvedNewPath)

      return commandFeature.actions.newStdOutput({
        key: uuid.v4(),
        command: key,
        data: `New working directory: ${resolvedNewPath}`,
        workingDirectory: resolvedNewPath
      })
    } catch (e) {
      return commandFeature.actions.newStdOutput({
        key: uuid.v4(),
        command: key,
        data: `Failed to cd to ${resolvedNewPath}`
      })
    }
  }
}

export const onPendingCommand = (command, { server }) => {
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
          type: 'directory',
          replacementCommand: `cd ${dir}`
        }))

      return suggestionsFeature.actions.setSuggestions(dirs, { command: server.pendingCommand })
    }
  } catch (e) {
    console.error('Autocompletion failed', e.message, e.stack)
  }
}
