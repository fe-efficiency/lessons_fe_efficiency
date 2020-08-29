//import foo from './withDefault'
import('./withDefault').then((foo) => {
  console.log('foo')
})
console.log('bar')
