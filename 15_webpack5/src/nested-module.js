import * as inner from './inner-module'

const nested = 'nested'

export { inner, nested }

const useB = function () {
  return inner.b
}

export const usingB = function () {
  return useB()
}
