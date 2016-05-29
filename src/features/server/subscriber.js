import { getSocket, startServer } from '../../services/server'
import { newClient, newCommand } from './actions'
import get from '../../lib/get'

export default ({ newState, getDiff, dispatch }) => {
  const serversDiff = getDiff(get('server.servers'))
  const inputsDiff = getDiff(get('command.inputs'))

  serversDiff.after &&
  serversDiff.after.map(serverData => {
    const server = startServer(serverData)

    server.handleConnect = (...xs) => dispatch(newClient(...xs))
    server.handleMessage = (...xs) => dispatch(newCommand(...xs))
  })

  inputsDiff.after &&
  inputsDiff.after.map(input => {
    const socketKey = newState.server.commands
      .find(command => command.key === input.command).socket.key

    getSocket(socketKey).send(input)
  })
}
