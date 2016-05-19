import { startProcess } from '../../services/process'
import { newInput, newError } from './actions'
import { compose } from 'redux'
import hasElementWithSameId from '../../lib/hasElementWithSameId'
import not from '../../lib/not'

let prevCommandList = []

export default ({ getState, dispatch }) => () => {
  const newCommandList = getState().server.commands

  newCommandList
    .filter(compose(not, hasElementWithSameId(prevCommandList)))
    .map(command => {
      const process = startProcess(command)

      process.handleInput = (input) => dispatch(newInput(input))
      process.handleError = (error) => dispatch(newError(error))
    })

  prevCommandList = newCommandList
}
