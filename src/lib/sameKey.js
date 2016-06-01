// @flow
export default (key: string):function => (x):boolean => x.key === key
