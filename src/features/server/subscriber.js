import startServer from './helpers/startServer'
import { newClient, newCommand } from './actions'
import { compose } from 'redux'
import hasElementWithSameId from '../../lib/hasElementWithSameId'
import not from '../../lib/not'

let prevServerList = []

export default ({ getState, dispatch }) => () => {
  const newServerList = getState().server.servers

  newServerList
    .filter(compose(not, hasElementWithSameId(prevServerList)))
    .map(serverData => {
      const server = startServer(serverData)

      server.handleConnect = (...xs) => dispatch(newClient(...xs))
      server.handleMessage = (...xs) => dispatch(newCommand(...xs))
    })

  prevServerList = newServerList
}
