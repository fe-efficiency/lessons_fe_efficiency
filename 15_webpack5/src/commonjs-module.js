exports.a = 11
this.exports.b = 22
module.exports.c = 33
Object.defineProperty(exports, 'd', {
  value: 44,
})
console.log('module')
