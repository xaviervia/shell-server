import { ADD_SESSION, SET_SUGGESTIONS } from './types'
import type { AddSession, SetSuggestions, Suggestions, Suggestion } from './types'
import type { Key } from '../../lib/types'

export const addSession = (
  key: Key,
  workingDirectory: ?string,
  pendingCommand: ?string,
  suggestions: ?Suggestions
):AddSession => ({
  type: ADD_SESSION,
  payload: {
    key,
    workingDirectory: workingDirectory || '',
    pendingCommand: pendingCommand || '',
    suggestions: suggestions || {
      context: {
        command: '',
        workingDirectory: ''
      },
      entries: []
    }
  }
})

export const setSuggestions = (
  command: string,
  workingDirectory: string,
  entries: Array<Suggestion>,
  session: Key
):SetSuggestions => ({
  type: SET_SUGGESTIONS,
  payload: {
    session,
    context: {
      command,
      workingDirectory
    },
    entries
  }
})
