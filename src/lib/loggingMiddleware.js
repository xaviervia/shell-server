import { blue } from 'chalk'

export default ({ getState, dispatch }) => (next) => ({ type, payload }) => {
  console.log(blue(type), payload)

  next({ type, payload })
}
