declare module 'redux' {
   declare function createStore(reducer:() => any): any
   declare function combineReducers(...reducer:any): any
   declare function compose(...f:any): any
}
