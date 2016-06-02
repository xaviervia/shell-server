import { combineReducers } from 'redux'

import commands from '../features/commands/reducer'
import server from '../features/servers/reducer'
import sessions from '../features/sessions/reducer'

export default combineReducers({
  commands,
  server,
  sessions
})
