import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { publicRoutes } from '../utils/routes'

const AppRouter = () => {
  return (
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
  )
}

export default AppRouter
