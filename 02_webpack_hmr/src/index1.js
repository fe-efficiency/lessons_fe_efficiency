import './style.css'

function render() {
  const div = document.createElement('div')
  div.innerHTML = 'Hello World';
  document.body.appendChild(div)
}

render()