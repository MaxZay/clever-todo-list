import React, { useContext } from 'react'
import { Context } from '../App/App'
import NavBar from '../NavBar/NavBar'
import PublicRouter from '../PublicRouter/PublicRouter'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

const AppRouter = () => {
  const { user } = useContext(Context)
  const [currentUser] = user

  return (
    <>
      <NavBar />
      {'email' in currentUser ? <PrivateRouter /> : <PublicRouter />}
    </>
  )
}

export default AppRouter
