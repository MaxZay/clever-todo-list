import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes } from '../../utils/routes'

const PublicRouter = () => {
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

export default PublicRouter
