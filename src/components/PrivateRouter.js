import React from 'react'
import { privateRoutes } from '../utils/routes'
import { Redirect, Route, Switch } from 'react-router-dom'

const PrivateRouter = () => {
  return (
    <Switch>
      {privateRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          component={item.Component}
          exact={true}
        />
      ))}
      <Redirect to={'/main'} />
    </Switch>
  )
}

export default PrivateRouter
