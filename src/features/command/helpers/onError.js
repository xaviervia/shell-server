import uuid from 'uuid'

export default process => data =>
  process.handleError({
    process: process.id,
    data: data.toString()
  })
