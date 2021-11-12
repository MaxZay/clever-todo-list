import React, { useContext } from 'react'
import '../styles/navabar.css'
import { Context } from '../App'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
  const { user } = useContext(Context)
  const [currentUser, setCurrentUser] = user
  const isCurrentUser = currentUser.hasOwnProperty('email')
  const history = useHistory()

  const logout = () => {
    setCurrentUser({})
    history.push('/login')
  }

  return (
    <nav className={'navigation'}>
      {isCurrentUser && (
        <div className={'navigation_block'}>
          <p className={'navigation_username'}>{currentUser.username}</p>
          <button className={'navigation_log-out'} onClick={logout}>
            Log out
          </button>
        </div>
      )}
    </nav>
  )
}

export default NavBar
