import Mock from 'mockjs'
import faker from 'faker'
import React, { useState } from 'react'
import { render } from 'react-dom'

let sample1 = {
  'number|1-100': 1,
}

const mockjsData = [
  {
    'number|1-100': 1,
  },
  {
    'boo|1-10': true,
  },
  {
    'str|1-100': '1',
  },
  '@email',
  '@city(true)',
  { 'aa|1-3': ['@cname()'] },
]

const MockJSDemo = ({ data }) => {
  const [mockTemp, setMockTemp] = useState(data)
  const [result, setResult] = useState(Mock.mock(mockTemp))
  const update = () => {
    setResult(Mock.mock(mockTemp))
  }
  const updateText = ({ target: { value } }) => {
    setMockTemp(JSON.parse(value))
    setResult(Mock.mock(mockTemp))
  }
  return (
    <>
      <textarea
        defaultValue={JSON.stringify(mockTemp)}
        rows="1"
        onChange={updateText}
        disabled={typeof mockTemp === 'string'}
        style={{ width: 200 }}
      ></textarea>
      <button style={{ marginLeft: 10, verticalAlign: 'top' }} onClick={update}>
        test
      </button>
      <pre>
        <code>{`Mock.mock(${JSON.stringify(
          mockTemp
        )}) //result: ${JSON.stringify(result)}`}</code>
      </pre>
    </>
  )
}

const FakerDemo = () => {
  faker.locale = 'zh_CN'
  const [randomName, setRandomName] = useState(faker.name.findName())
  const [randomEmail, setRandomEmail] = useState(faker.internet.email())
  const [randomCard, setRandomCard] = useState(faker.helpers.createCard())
  const [combine, setCombine] = useState(
    faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}')
  )
  const updateRandomName = () => setRandomName(faker.name.findName())
  const updateRandomEmail = () => setRandomEmail(faker.internet.email())
  const updateRandomCard = () => setRandomCard(faker.helpers.createCard())
  const updateCombine = () =>
    setCombine(
      faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}')
    )
  return (
    <>
      <div>
        {[
          `faker.name.findName() `,
          <button onClick={updateRandomName}>test</button>,
          ` //result: ${randomName}`,
        ]}
      </div>
      <div>
        {[
          `faker.internet.email() `,
          <button onClick={updateRandomEmail}>test</button>,
          ` //result: ${randomEmail}`,
        ]}
      </div>
      <div>
        {[
          `faker.helpers.createCard() `,
          <button onClick={updateRandomCard}>test</button>,
          ` //result: ${JSON.stringify(randomCard)}`,
        ]}
      </div>
      <div>
        {[
          `faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")`,
          <button onClick={updateCombine}>test</button>,
          ` //result: ${combine}`,
        ]}
      </div>
    </>
  )
}

const App = () => {
  return (
    <>
      <section>
        <h1>Mock.js Demos</h1>
        {mockjsData.map((data, index) => (
          <MockJSDemo data={data} key={index} />
        ))}
      </section>
      <section>
        <h1>Faker Demos</h1>
        <FakerDemo />
      </section>
    </>
  )
}
console.log(faker.name.findName())

render(<App />, document.querySelector('#main'))
