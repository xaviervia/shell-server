import { blue } from 'chalk'
import type { Dispatcher, Action } from '../../lib/types'

export default (store: any) => (next: Dispatcher) => (action: Action) => {
  console.log(blue(action.type), action.payload)

  next(action)
}
