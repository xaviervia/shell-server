import uuid from 'uuid'

export default process => data =>
  process.handleInput({
    command: process.id,
    data: data.toString()
  })
