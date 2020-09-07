import * as _ from 'lodash-es'

console.log(_.slice)

//另一个使用__PURE__声明模块无副作用的方法
// import { foo } from './module-unused'
// /*#__PURE__*/ foo()
