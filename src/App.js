import './styles/app.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

export const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    console.log(process.env)
  }, [])

  return (
    <Context.Provider
      value={{
        user: [user, setUser],
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  )
}
// todo: dotenv virtualize js-cookie
