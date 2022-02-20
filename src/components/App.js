import { useState } from 'react'
import { pushMessage } from '../firebase'

const App = () => {
  const [data, setData] = useState({ name: 'default', text: 'text' })

  const setNameFunc = (e) => {
    setData((prevData) => ({ ...prevData, name: e.target.value }))
  }

  const setTextFunc = (e) => {
    setData((prevData) => ({ ...prevData, text: e.target.value }))
  }

  const pushMessageToFirebase = () => {
    pushMessage({ ...data })
  }

  return (
    <>
      <input type="text" value={data.name} onChange={(e) => setNameFunc(e)} />
      <input type="text" value={data.text} onChange={(e) => setTextFunc(e)} />
      <button onClick={() => pushMessageToFirebase()}>push</button>
    </>
  )
}

export default App