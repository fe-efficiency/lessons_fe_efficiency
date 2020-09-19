import { appendHTML } from './common.js'

appendHTML('bar module executed')

export const bar = function () {
  appendHTML('function bar called')
}
