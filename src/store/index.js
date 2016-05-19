import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import loggingMiddleware from '../lib/loggingMiddleware'

export default ({ server }) =>
  compose
    (applyMiddleware(
      loggingMiddleware,
      server.middleware
    ))
    (createStore)
    (
      combineReducers({
        server: server.reducer
      })
    )
