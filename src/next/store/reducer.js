import { combineReducers } from 'redux'

import commands from '../features/commands/reducer'
import servers from '../features/servers/reducer'
import sessions from '../features/sessions/reducer'

export default combineReducers({
  commands,
  servers,
  sessions
})
