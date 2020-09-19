import * as bar from './bar.js'
import { appendHTML } from './common.js'
import './style.css'

appendHTML('foo module executed')

bar.bar()

import('https://cdn.jsdelivr.net/npm/lodash-es@4.17.15/slice.js').then(
  (module) => {
    appendHTML('slice function from lodash-es: ' + module.default.toString())
  }
)
