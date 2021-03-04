import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './store'
import App from './App';

// Global Style
import './styles/main.scss'

// Material-UI Theme
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIthemeOption from './utils/MUIthemeOption'
const theme = createMuiTheme(MUIthemeOption)

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

