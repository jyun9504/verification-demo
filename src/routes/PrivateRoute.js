import React from 'react'
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = (props) => {

  return (
    <Route
      path={props.path}
      render={({ location }) =>
        localStorage.getItem('token') !== '' ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute