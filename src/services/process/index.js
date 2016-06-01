import { spawn } from 'child_process'
import onError from './onError'
import onStdError from './onStdError'
import onStdOutput from './onStdOutput'

const processes = []

export const startProcess = ({ key, command, session, workingDirectory }) => {
  const spawned = spawn(...command, { cwd: workingDirectory })
  const process = {
    key,
    command,
    session,
    process: spawned,
    input: [],
    error: []
  }

  processes.push(process)

  spawned.stdout.on('data', onStdOutput(process))
  spawned.stderr.on('data', onStdError(process))
  spawned.on('error', onError(process))

  return process
}

export const getProcess = ({ key }) =>
  processes.find(process => process.key === key)
