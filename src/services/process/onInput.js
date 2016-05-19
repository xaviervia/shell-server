import uuid from 'uuid'

export default process => data =>
  process.handleInput({
    id: uuid.v4(),
    command: process.id,
    data: data.toString()
  })
