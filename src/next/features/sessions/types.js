import type { Key } from '../../lib/types'

export type Suggestion = {
  key: Key,
  replacementCommand: string,
  label: string
}

export type Suggestions = {
  context: {
    command: string,
    workingDirectory: string
  },
  entries: Array<Suggestion>
}

export type Session = {
  key: Key,
  pendingCommand: string,
  workingDirectory: string,
  suggestions: Suggestions
}

export type State = Array<Session>

export const ADD_SESSION = 'sessions/ADD_SESSION'

export type AddSession = {
  type: string,
  payload: {
    key: Key,
    workingDirectory: string,
    pendingCommand: string,
    suggestions: Suggestions
  }
}

export const SET_SUGGESTIONS = 'sessions/SET_SUGGESTIONS'

export type SetSuggestions = {
  type: string,
  payload: {
    session: Key,
    context: {
      command: string,
      workingDirectory: string
    },
    entries: Array<Suggestion>
  }
}
