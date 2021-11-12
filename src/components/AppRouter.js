import React, { useContext } from 'react'
import { Context } from '../App'
import NavBar from './NavBar'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  const { user } = useContext(Context)
  const [currentUser] = user
  let userIsLogin = 'email' in currentUser
  return (
    <>
      <NavBar />
      {userIsLogin ? <PrivateRouter /> : <PublicRouter />}
    </>
  )
}

export default AppRouter
