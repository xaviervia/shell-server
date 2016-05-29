import { startProcess } from '../../services/process'
import { newInput, newError } from './actions'
import get from '../../lib/get'

export default ({ getDiff, dispatch }) => {
  const commandsDiff = getDiff(get('server.commands'))

  commandsDiff.after &&
  commandsDiff.after.map(command => {
    const process = startProcess(command)

    process.handleInput = (input) => dispatch(newInput(input))
    process.handleError = (error) => dispatch(newError(error))
  })
}
