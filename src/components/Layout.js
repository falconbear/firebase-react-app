import { useStateContext } from '../context/StateProvider'

const Layout = () => {
  const { serviceName } = useStateContext()

  return <div>{serviceName}</div>
}

export default Layout