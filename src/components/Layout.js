import { useEffect, useState } from 'react'
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { LogoutIcon } from '@heroicons/react/outline'
import Modal from './Modal'

const Layout = () => {
  const { serviceName, isLogin } = useStateContext()
  const navigate = useNavigate()
  const [modalOn, setModalOn] = useState(false)
  const location = useLocation()

  const modal = () => {
    setModalOn((prevState) => (prevState = true))
  }
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-xl tracking-tight text-white">
                {serviceName}!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/Message"
              >
                Message
              </Link>
            </div>
            <div className="">
              <LogoutIcon
                className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded"
                aria-hidden="true"
                onClick={() => {
                  modal()
                }}
              />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
        {modalOn ? <Modal setModalOn={setModalOn} /> : null}
      </main>
      {location.pathname === '/' ? null : <Link to="/">Top</Link>}
      <footer className="bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex justify-center items-center">
          <p className="pt-3">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout