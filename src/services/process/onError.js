import uuid from 'uuid'
import type { Process } from './types'

export default (process: Process) => data =>
  process.handleError({
    key: uuid.v4(),
    process: process.key,
    data: data.toString()
  })
