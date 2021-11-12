import './styles/app.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import firebase from 'firebase/compat'
import 'firebase/firestore'
import { createContext, useState } from 'react'

firebase.initializeApp({
  apiKey: 'AIzaSyAgM-AZwSuSObxt3buUB1D9gdwNvBsjPi8',
  authDomain: 'clever-to-do-list-b7367.firebaseapp.com',
  projectId: 'clever-to-do-list-b7367',
  storageBucket: 'clever-to-do-list-b7367.appspot.com',
  messagingSenderId: '392160159278',
  appId: '1:392160159278:web:49509c2bdf99bcc1e261bf',
  measurementId: 'G-ZS4BX3JN3Z',
})

export const Context = createContext(null)

export const App = () => {
  const [user, setUser] = useState({})

  const firestore = firebase.firestore()

  return (
    <Context.Provider
      value={{
        firebase,
        firestore,
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
