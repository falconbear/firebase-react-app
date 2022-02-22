import { useState, useEffect } from "react"
import { messagesRef, pushMessage } from "../firebase"

const App = () => {
  const [text, setText] = useState("メッセージを入力")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(10)
      .on("value", (snapshot) => {
        const messages = snapshot.val()
        if (messages === null) return
        const entries = Object.entries(messages)
        const newMessages = entries.map((data) => {
          const [key, message] = data
          return { key, ...message }
        })
        setMessages(newMessages)
      })
  }, [])

  return (
    <div class="chat">
      {messages.map((message) => (
        <div key={message.key}>
          {message.text}
        </div>
      ))}
        <div class="form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText((text) => (text = e.target.value))}
          />
          <button onClick={() => pushMessage({ text: text })}>
            push
          </button>
        </div>
    </div>
  )
}

export default App