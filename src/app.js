import configureStore from './store'
import command from './features/command'
import server from './features/server'
import createSubscriptions from 'redux-subscriptions'
import { black } from 'chalk'

export default (ports) => {
  const store = configureStore({
    command,
    server
  })

  store.subscribe(() =>
    console.log(black(JSON.stringify(store.getState())))
  )

  store.subscribe(
    createSubscriptions(store)(
      command.subscriber,
      server.subscriber
    )
  )

  ports.forEach(
    port => store.dispatch(server.actions.newServer(port))
  )
}
