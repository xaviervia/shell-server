import * as actionTypes from './actionTypes'
import * as actions from './actions'
import subscriber from './subscriber'
import reducer from './reducer'

export default ({
  actionTypes,
  actions,
  reducer,
  subscriber
})

// import { Server } from 'ws'
// import onConnect from './helpers/handleConnect'
//
// const middleware = ({ getState, dispatch }) => (next) => (action) => {
//
//   console.log(action)
//
//   next(action)
// }
//
// const dispatcher = ({ sockets, handleConnect }) => {
//   handleConnect( )
// }
//
// const initialState = {
//   sockets: []
// }
//
// const reducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case 'CONNECTION':
//       return {
//         ...state,
//         sockets: state.sockets
//           .concat(action.payload)
//       }
//
//     default:
//       return state
//   }
// }
//
//
// export default () => {
//   const wss = new Server({ port: 8080 })
//
//   const server = {
//     sockets: []
//     wss: wss,
//     handleConnect: onConnect(server),
//   }
//
//   return
// }
