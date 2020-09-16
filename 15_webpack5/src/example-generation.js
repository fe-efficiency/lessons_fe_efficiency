import { bar } from './bar'

const gen = 'gen'
const o = [1, 2, 3, 4]
const rest = (arr) => {
  if (!arr) {
    arr = o
  }
  return [5, ...arr]
}
const rest1 = [...o, 5]

export { gen, rest }

console.log('foo1', bar, rest(), rest([]), rest1)
