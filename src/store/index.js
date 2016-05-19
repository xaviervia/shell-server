import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import loggingMiddleware from '../lib/loggingMiddleware'

export default ({ command, server }) =>
  compose
    (applyMiddleware(
      loggingMiddleware
    ))
    (createStore)
    (
      combineReducers({
        command: command.reducer,
        server: server.reducer
      })
    )
