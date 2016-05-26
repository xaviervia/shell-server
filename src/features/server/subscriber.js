import { getSocket, startServer } from '../../services/server'
import { newClient, newCommand } from './actions'

const serverSelector = (state) =>
  state && state.server && state.server.servers

const inputSelector = (state) =>
  state && state.command && state.command.inputs

export default ({ newState, getDiff, dispatch }) => {
  const [_, newServers] = getDiff(serverSelector) || []
  const [__, newInputs] = getDiff(inputSelector) || []

  if (newServers) {
    newServers.map(serverData => {
      const server = startServer(serverData)

      server.handleConnect = (...xs) => dispatch(newClient(...xs))
      server.handleMessage = (...xs) => dispatch(newCommand(...xs))
    })
  }

  if (newInputs) {
    newInputs.map(input => {
      const socketKey = newState.server.commands
        .find(command => command.key === input.command).socket.key

      getSocket(socketKey).send(input)
    })
  }
}
