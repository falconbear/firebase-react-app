import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { useState, useEffect } from "react"
import { messagesRef, pushMessage } from "../firebase"

const Message = () => {
  const [text, setText] = useState("メッセージを入力")
  const [messages, setMessages] = useState([])
  const navigate = useNavigate()
  const { isOn, setIsOn } = useStateContext()

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
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-1">Chat Page</p>
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
        <button
          onClick={() => pushMessage({ text: text })}
          className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-1 px-4 rounded"
          >
          push
        </button>
      </div>
      
      <p onClick={() => navigate('/')}>Go Root</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default Message