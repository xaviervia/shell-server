import configureStore from './store'
import command from './features/command'
import server from './features/server'
import createSubscriptions from 'redux-subscriptions'

export default (ports) => {
  const store = configureStore({
    command,
    server
  })

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
