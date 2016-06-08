import { applyMiddleware, createStore, compose } from 'redux'
import log from './middlewares/log'
import reducer from './reducer'
import devTools from 'remote-redux-devtools'

export default () => {
  const enhancer = compose(
    applyMiddleware(log),
    devTools({ realtime: true })
  )

  return createStore(reducer, {}, enhancer)
}
