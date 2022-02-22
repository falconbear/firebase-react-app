import { StateProvider } from './context/StateProvider'
import Layout from './components/Layout'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Login />
        <Layout />
      </StateProvider>
    </div>
  )
}

export default App