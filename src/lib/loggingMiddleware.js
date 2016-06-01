import { blue, black } from 'chalk'

export default ({ getState, dispatch }) => (next) => ({ type, payload }) =>
  (setTimeout(() => console.log(blue(type), payload)), true) &&
  (setTimeout(() => console.log(black(JSON.stringify(getState(), 2)))), true) &&
  next({ type, payload })
