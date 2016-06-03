import type { State as CommandsState } from '../features/commands/types'
import type { State as ServersState } from '../features/servers/types'
import type { State as SessionsState } from '../features/sessions/types'

export type State = {
  commands: CommandsState,
  servers: ServersState,
  sessions: SessionsState
}
