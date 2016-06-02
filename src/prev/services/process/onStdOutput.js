import uuid from 'uuid'

export default process => data =>
  process.handleInput({
    key: uuid.v4(),
    command: process.key,
    data: data.toString()
  })
