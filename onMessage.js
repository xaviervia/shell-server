import through from './lib/through'
const { log } = console

export default through
  (JSON.parse)
  ((message) => {
    log(message)
  })
