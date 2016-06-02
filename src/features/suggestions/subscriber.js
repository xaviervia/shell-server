import get from '../../lib/get'
import * as cdPlugin from '../../plugins/cdPlugin'
import breakdownCommand from '../../lib/breakdownCommand'
import { magenta } from 'chalk'

export default ({ newState, getDiff, dispatch }) => {
  const pendingCommandDiff = getDiff(get('server.pendingCommand'))

  if (pendingCommandDiff.after) {
    console.log(magenta('PENDING COMMAND DIFF'), pendingCommandDiff)

    const parsedCommand = breakdownCommand(pendingCommandDiff.after)

    const pendingCommandAction = cdPlugin.onPendingCommand(parsedCommand, newState, dispatch)

    pendingCommandAction &&
    process.nextTick(() => dispatch(pendingCommandAction))
  }
}
