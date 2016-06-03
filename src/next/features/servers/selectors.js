import type { State } from '../../store/types'
import type { Server } from './types'
import get from '../../lib/get'

export const getServers: (state: ?State) => ?Array<Server> = get('servers')
