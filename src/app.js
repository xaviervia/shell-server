import configureStore from './store'
import command from './features/command'
import server from './features/server'

export default (ports) => {
  const store = configureStore({
    command,
    server
  })

  store.subscribe(command.subscriber(store))
  store.subscribe(server.subscriber(store))

  ports.forEach(
    port => store.dispatch(server.actions.newServer(port))
  )
}
