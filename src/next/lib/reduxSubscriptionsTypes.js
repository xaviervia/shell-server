export type ConnectArguments = {
  mapStateToProps(state: any, prevState: any): any,
  mapDispatchToProps(dispatch: (action: any) => void): any
}
