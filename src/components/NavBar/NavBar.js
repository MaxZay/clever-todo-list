import React, { useContext } from 'react'
import './NavBar.styles.css'
import { Context } from '../App/App'
import LogoutButton from '../LogoutButton/LogoutButton'

const NavBar = () => {
  const { user } = useContext(Context)
  const [currentUser] = user
  const isCurrentUser = currentUser.hasOwnProperty('email')

  return (
    <nav className={'navigation'}>
      {isCurrentUser && (
        <div className={'navigation_block'}>
          <p className={'navigation_username'}>{currentUser.username}</p>
          <LogoutButton />
        </div>
      )}
    </nav>
  )
}

export default NavBar
