import { spawn } from 'child_process'
import onError from './onError'
import onInput from './onInput'

const processes = []

const breakdownCommand = (line) => {
  const [command, ...args] = line.split(' ')

  return [
    command,
    args
  ]
}

export const startProcess = ({ key, command, session }) => {
  const spawned = spawn(...breakdownCommand(command))
  const process = {
    key,
    command,
    session,
    process: spawned,
    input: [],
    error: []
  }

  processes.push(process)

  spawned.stdout.on('data', onInput(process))
  spawned.stderr.on('data', onError(process))

  return process
}

export const getProcess = ({ key }) =>
  processes.find(process => process.key === key)
