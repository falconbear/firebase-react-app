import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return <div>{serviceName}</div>
}

export default Layout