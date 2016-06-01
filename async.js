'use strict'

let a = 0

process.nextTick(() => {
  console.log('process.nextTick', a)
  a++
})

setTimeout(() => {
  console.log('setTimeout', a)
  a++
})
