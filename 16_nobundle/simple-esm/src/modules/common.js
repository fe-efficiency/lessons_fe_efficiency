export const appendHTML = (html, tag = 'div', parent = document.body) => {
  const fragment = document.createDocumentFragment()
  const elm = document.createElement(tag)
  fragment.append(html)
  elm.appendChild(fragment)
  parent.appendChild(elm)
}
