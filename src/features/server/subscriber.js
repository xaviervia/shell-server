import { getServer, getSocket, startServer } from '../../services/server'

import { newClient, newCommand } from './actions'
import { compose } from 'redux'
import hasElementWithSameId from '../../lib/hasElementWithSameId'
import not from '../../lib/not'

let prevServerList = []
let prevInputList = []

const findSocketId = (state) => (commandId) =>
  state.server.commands.find(command => command.id === commandId).socket.id

export default ({ getState, dispatch }) => () => {
  const state = getState()

  // This need to be done a simpler way
  const newServerList = state.server.servers

  newServerList
    .filter(compose(not, hasElementWithSameId(prevServerList)))
    .map(serverData => {
      const server = startServer(serverData)

      server.handleConnect = (...xs) => dispatch(newClient(...xs))
      server.handleMessage = (...xs) => dispatch(newCommand(...xs))
    })

  prevServerList = newServerList

  const newInputList = state.command.inputs

  newInputList
    .filter(compose(not, hasElementWithSameId(prevInputList)))
    .map(input => {
      const socketId = state.server.commands
        .find(command => command.id === input.command).socket.id

      getSocket(socketId).send(input)
    })

  prevInputList = newInputList
}
