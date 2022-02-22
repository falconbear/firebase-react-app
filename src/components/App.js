import { StateProvider } from './context/StateProvider'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Layout />
      </StateProvider>
    </div>
  )
}

export default App