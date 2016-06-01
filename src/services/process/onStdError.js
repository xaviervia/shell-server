import uuid from 'uuid'

export default process => data =>
  process.handleError({
    key: uuid.v4(),
    process: process.key,
    data: data.toString()
  })
