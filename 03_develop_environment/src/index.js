import React from 'react'
import ReactDOM from 'react-dom'
import Print from './print'
const x = [1,2,3]
const y = [4,...x]
const elem  = React.createElement("div", {}, `Hello World`);
(new Print).action();
throw new Error('err');
ReactDOM.render(elem, document.querySelector('#app'))