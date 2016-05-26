import { getServer, getSocket, startServer } from '../../services/server'

import { newClient, newCommand } from './actions'
import { compose } from 'redux'
import hasElementWithSameKey from '../../lib/hasElementWithSameKey'
import not from '../../lib/not'

let prevServerList = []
let prevInputList = []

const findSocketKey = (state) => (commandId) =>
  state.server.commands.find(command => command.key === commandKey).socket.key

export default ({ newState, dispatch }) => {
  const state = newState

  // This need to be done a simpler way
  const newServerList = state.server.servers

  newServerList
    .filter(compose(not, hasElementWithSameKey(prevServerList)))
    .map(serverData => {
      const server = startServer(serverData)

      server.handleConnect = (...xs) => dispatch(newClient(...xs))
      server.handleMessage = (...xs) => dispatch(newCommand(...xs))
    })

  prevServerList = newServerList

  const newInputList = state.command.inputs

  newInputList
    .filter(compose(not, hasElementWithSameKey(prevInputList)))
    .map(input => {
      const socketKey = state.server.commands
        .find(command => command.key === input.command).socket.key

      getSocket(socketKey).send(input)
    })

  prevInputList = newInputList
}
