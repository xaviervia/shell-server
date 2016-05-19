import configureStore from './store'
import server from './features/server'

export default (ports) => {
  const store = configureStore({
    server
  })

  ports.forEach(
    port => store.dispatch(server.actions.newServer(port))
  )
}
