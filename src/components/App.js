import { memo } from 'react'
import Message from './Message'
import useApp from '../hooks/useApp'

const App = memo(() => {
  const { setNameFunc, setTextFunc, pushMessageToFirebase, messages, data } =
    useApp()

  return (
    <>
      {messages.map((message) => (
        <Message key={message.key} message={message} />
      ))}
      <input type="text" value={data.name} onChange={(e) => setNameFunc(e)} />
      <input type="text" value={data.text} onChange={(e) => setTextFunc(e)} />
      <button onClick={() => pushMessageToFirebase()}>push</button>
    </>
  )
})

export default App
