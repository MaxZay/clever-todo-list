import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../utils/routes'
import { Context } from '../App'

const AppRouter = () => {
  const { user } = useContext(Context)
  const [currentUser] = user
  let userIsLogin = 'email' in currentUser
  return (
    <>
      {userIsLogin ? (
        <Switch>
          {privateRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.Component}
              exact={true}
            />
          ))}
          <Redirect to={'/login'} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.Component}
              exact={true}
            />
          ))}
          <Redirect to={'/login'} />
        </Switch>
      )}
    </>
  )
}

export default AppRouter
