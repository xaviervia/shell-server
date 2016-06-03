import objectDifference from 'object-difference'
import type { ConnectArguments } from './reduxSubscriptionsTypes'

export const connect = ({ mapStateToProps, mapDispatchToProps }:ConnectArguments) => (subscriber: any) => (store: any) => {
  let prevState
  const asyncDispatch = (action) => {
    setTimeout(() => store.dispatch(action))
  }

  store.subscribe(() => {
    const nextState = store.getState()

    subscriber({
      ...mapStateToProps(nextState, prevState),
      ...mapDispatchToProps(asyncDispatch)
    })

    prevState = nextState
  })
}

export const getDiff = (selector: (x: any) => any) => (prevFragment: any, nextFragment: any) => {
  const diff = objectDifference(
    selector(prevFragment),
    selector(nextFragment)
  ) || []

  return {
    before: diff[0],
    after: diff[1]
  }
}
