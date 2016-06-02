import { blue } from 'chalk'

export default store => next => action => {
  console.log(blue(action.type), action.payload)

  next(action)
}
