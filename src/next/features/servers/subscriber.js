import { compose } from 'redux'
import { connect, getDiff } from '../../lib/reduxSubscriptions'
import { createServer } from './lib/webSocketServer'
import { getServers } from './selectors'
import { addClient } from './actions'
import { addCommand } from '../commands/actions'
import { addSession } from '../sessions/actions'

const ServersSubscriber = ({
  newServers,
  onCommand,
  onConnection,
  onSession
}) => {
  newServers && newServers.map(
    (server) => createServer({
      ...server,
      onConnection,
      onMessage: (client) => (data) => handleMessage(client, data, onCommand, onSession)
    })
  )
}

const handleMessage = (client, data, onCommand, onSession) => {
  const { type, payload } = JSON.parse(data)

  switch (type) {
    case 'COMMAND':
      onSession(payload.session, client)

      onCommand({
        input: payload.input,
        workingDirectory: payload.workingDirectory,
        session: payload.session
      })
  }
}

export default connect({
  mapStateToProps: (state, prevState) => ({
    newServers: getDiff(getServers)(prevState, state).after
      .filter((server) => prevState !== undefined
        ? !prevState.servers.find(({ key }) => server.key)
        : true
      )
  }),

  mapDispatchToProps: (dispatch, getState) => ({
    onConnection: compose(dispatch, addClient),
    onMessage: compose(dispatch, addCommand),
    onSession: (session, client) => {
      const { sessions } = getState()

      sessions[session] || dispatch(addSession({
        key: session,
        client
      }))
    }
  })
})(ServersSubscriber)
