import { NEW_SERVER } from './actionTypes'
import { newClient, newCommand } from './actions'
import startServer from './helpers/startServer'

export default ({ getState, dispatch }) => (next) => ({ type, payload }) => {
  if (type === NEW_SERVER) {
    const server = startServer(payload)

    server.handleConnect = (...xs) => dispatch(newClient(...xs))
    server.handleMessage = (...xs) => dispatch(newCommand(...xs))
  }

  next({ type, payload })
}
