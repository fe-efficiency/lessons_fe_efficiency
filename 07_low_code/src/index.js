import React from 'react'
import { render } from 'react-dom'
import { Form, Button, Select } from 'antd'
import 'antd/dist/antd.css'
import ContentJSX from './content-jsx'
import ContentJSON from './content-json'

// render normal JSX
function renderJSX(JSX, parentDom) {
  render(<JSX />, parentDom)
}

// render JSON
function renderJSON(jsonTree, parentDom) {
  const safeComponents = {
    Form: Form,
    'Form.Item': Form.Item,
    Select: Select,
    'Select.Option': Select.Option,
    Button: Button,
    text: '',
  }

  let uuid = 1

  const parseToComponent = (obj) => {
    const { type, props, children, value } = obj
    const CurrentComponent = safeComponents[type]
    if (typeof CurrentComponent === 'undefined') {
      throw new Error('component type not allowed')
    }
    let propsStr = ''
    if (props && typeof props === 'object') {
      propsStr = Object.keys(props).map((key) => `${key}="${props[key]}"`)
    }

    switch (type) {
      case 'text':
        return value

      default:
        return (
          <CurrentComponent {...props} key={uuid++}>
            {children ? children.map((child) => parseToComponent(child)) : null}
          </CurrentComponent>
        )
    }
  }

  const componentTree = parseToComponent(jsonTree)

  render(componentTree, parentDom)
}

renderJSX(ContentJSX, document.querySelector('#main'))

renderJSON(ContentJSON, document.querySelector('#mainJson'))
