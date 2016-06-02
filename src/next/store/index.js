import { applyMiddleware, createStore, compose } from 'redux'
import log from './middlewares/log'
import reducer from './reducer'

export default () =>
  compose
    (applyMiddleware(log))
    (createStore)
    (reducer)
