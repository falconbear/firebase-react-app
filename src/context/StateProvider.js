import { createContext, useContext } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const serviceName = 'Super Web Site'

  return (
    <StateContext.Provider value={{ serviceName }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)