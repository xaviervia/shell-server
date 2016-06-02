type Key = string

type SuggestionEntry = {
  key: Key,
  replacementCommand: string,
  label: string
}

type Session = {
  key: Key,
  pendingCommand: string,
  workingDirectory: string,
  suggestions: {
    context: {
      command: string
    },
    entries: Array<SuggestionEntry>
  }
}

type Command = {
  key: Key,
  input: string,
  workingDirectory: string,
  output: string,
  error: string
}

type Client = {
  key: Key,
  session: Key
}

type Server = {
  key: Key,
  port: number,
  clients: Array<Client>
}

type State = {
  sessions: Array<Session>,
  commands: Array<Command>,
  servers: Array<Server>
}
