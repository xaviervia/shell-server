import uuid from 'uuid'
import { red } from 'chalk'

export default socket => message => {
  try {
    socket.server.handleMessage({
      meta: {
        socket: {
          key: socket.key,
          server: socket.server.key
        },
      },
      ...JSON.parse(message)
    })
  } catch (e) {
    console.log('Oops', e)
  }
}
