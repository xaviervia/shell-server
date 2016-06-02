import { getSocket, startServer } from '../../services/server'
import { newClient, newCommand, newUserInput, newSession } from './actions'
import get from '../../lib/get'
import { red } from 'chalk'

export default ({ newState, getDiff, dispatch }) => {
  const serversDiff = getDiff(get('server.servers'))
  const inputsDiff = getDiff(get('command.inputs'))
  const suggestionsDiff = getDiff(get('suggestions.suggestions'))

  serversDiff.after &&
  serversDiff.after.map(serverData => {
    const server = startServer(serverData)

    server.handleConnect = (...xs) => dispatch(newClient(...xs))
    server.handleMessage = ({ type, payload, meta }) => {
      switch (type) {
        case 'SUBMIT':
          return dispatch(newCommand({ ...payload, ...meta }))

        case 'USER_INPUT':
          return dispatch(newUserInput({ ...payload, ...meta }))

        case 'GET_SESSION':
          return dispatch(
            newSession(payload.session, meta.socket.key)
          )
      }
    }
  })

  inputsDiff.after &&
  inputsDiff.after.map(input => {
    const socketKey = newState.server.commands
      .find(command => command.key === input.command).socket.key

    getSocket(socketKey).send(input)
  })

  if (suggestionsDiff.after) {
    console.log(red('ABOUT TO SEND'), newState.command.suggestions)

    getSocket(newState.server.currentSocket).send({
      type: 'NEW_SUGGESTIONS',
      payload: newState.suggestions.suggestions
    })
  }
}
