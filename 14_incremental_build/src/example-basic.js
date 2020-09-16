import foo from './foo'

console.log('basic4')

import('./bar').then((bar) => {
  console.log('get bar11')
})
