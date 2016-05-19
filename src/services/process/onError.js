import uuid from 'uuid'

export default process => data =>
  process.handleError({
    id: uuid.v4(),
    process: process.id,
    data: data.toString()
  })
