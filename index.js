import app from './src/next'

const port = parseInt(process.argv[2], 10) || 8080

app([port])
