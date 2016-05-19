export default (...fs) => (f) => (...xs) =>
  f(...fs.map((f, i) => f(xs[i])))
