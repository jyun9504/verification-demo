import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import Layout from './components/Layout'
import LoginContainer from './containers/LoginContainer'
import VerificationContainer from './containers/VerificationContainer'
import ReceiptsContainer from './containers/ReceiptsContainer'
import ConflictContainer from './containers/ConflictContainer'
import BlockchainContainer from './containers/BlockchainContainer'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  const location = useLocation()
  return (
    <React.Fragment>
      <Layout>
        <Switch location={location}>
          <Route exact path="/"><LoginContainer /></Route>
          <PrivateRoute exact path="/verification"><VerificationContainer /></PrivateRoute>
          <PrivateRoute exact path="/receipts"><ReceiptsContainer /></PrivateRoute>
          <PrivateRoute exact path="/conflict/:hash"><ConflictContainer /></PrivateRoute>
          <PrivateRoute exact path="/blockchain"><BlockchainContainer /></PrivateRoute>
          <Redirect to='/verification' />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App
