import './App.styles.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from '../AppRouter/AppRouter'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

export const App = () => {
  const [user, setUser] = useState({})
  const [darkMode] = useState(false)

  useEffect(() => {
    darkMode && (document.body.className = 'dark')
  }, [darkMode])

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
