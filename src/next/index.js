import configureStore from './store'
import createSubscriptions from 'redux-subscriptions'
import { black } from 'chalk'

import { addServer } from './features/servers/actions'

export default (ports: Array<number>) => {
  const store = configureStore()

  store.subscribe(() => console.log(black(JSON.stringify(store.getState()))))

  ports.forEach(
    port => store.dispatch(addServer(port))
  )
}
