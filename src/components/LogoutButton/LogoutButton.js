import React, { useContext } from 'react'
import { Context } from '../App/App'
import { useHistory } from 'react-router-dom'
import './LogoutButton.styles.css'

const LogoutButton = () => {
  const { user } = useContext(Context)
  const [, setCurrentUser] = user
  const history = useHistory()

  const logout = () => {
    setCurrentUser({})
    history.push('/login')
  }

  return (
    <button className={'navigation_log-out'} onClick={logout}>
      Log out
    </button>
  )
}

export default LogoutButton
