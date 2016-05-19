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

export const startProcess = ({ id, command, session }) => {
  const spawned = spawn(...breakdownCommand(command))
  const process = {
    id,
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

export const getProcess = ({ id }) =>
  processes.find(process => process.id === id)
