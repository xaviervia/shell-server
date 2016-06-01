import { spawn } from 'child_process'
import type { Command, Error, Input } from '../../features/command/types'
import type { Process, ProcessHandlers } from './types'
import onError from './onError'
import onInput from './onInput'

import sameKey from '../../lib/sameKey'

const processes: Array<Process> = []

export const startProcess = (
  { key, command, session }: Command,
  { handleError, handleInput }: ProcessHandlers
): Process => {
  const spawned = spawn(...breakdownCommand(command))
  const process: Process = {
    key,
    command,
    session,
    process: spawned,
    input: [],
    error: [],
    handleInput,
    handleError
  }

  processes.push(process)

  spawned.stdout.on('data', onInput(process))
  spawned.stderr.on('data', onError(process))

  return process
}

export const getProcess = ({ key }: Command):Process =>
  processes.find(sameKey(key))

const breakdownCommand = (line: string) => {
  const [command, ...args] = line.split(' ')

  return [
    command,
    args
  ]
}
