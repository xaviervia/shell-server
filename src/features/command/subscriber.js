// @flow
import type { Command } from './types'
import type { Subscription, SubscriptionArguments } from 'redux-subscriptions/types'

import { startProcess } from '../../services/process'
import { newInput, newError } from './actions'

import get from '../../lib/get'
import through from '../../lib/through'

export default ({ getDiff, dispatch }: SubscriptionArguments) => {
  const commandsDiff = getDiff(get('server.commands'))

  commandsDiff.after &&
  commandsDiff.after.map(command => {
    const process = startProcess(command)

    process.handleInput = (input) => dispatch(newInput(input))
    process.handleError = (error) => dispatch(newError(error))
  })
}

const runCommand = (command: Command, dispatch: function) => {
  const process = startProcess(command)
}
