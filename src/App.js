import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Root from './components/Root'
import Message from './components/Message'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Root />} />
          <Route path="/Message" element={<Message />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App