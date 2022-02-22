import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App