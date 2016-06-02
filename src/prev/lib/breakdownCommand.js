export default (line) => {
  const [command, ...args] = line.split(' ')

  return [
    command,
    args
  ]
}
