import configureStore from './store'
import { black } from 'chalk'

import { addServer } from './features/servers/actions'
import serversSubscriber from './features/servers/subscriber'

export default (ports: Array<number>) => {
  const store = configureStore()

  store.subscribe(() => console.log(black(JSON.stringify(store.getState()))))

  serversSubscriber(store)

  ports.forEach(
    port => store.dispatch(addServer(port))
  )
}
