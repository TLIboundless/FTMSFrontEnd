import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,

    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 20,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#b28900',
    },
    type: 'dark',
  },
  overrides: {
    MuiButton: {
        // Name of the rule
        secondary: {
          // Some CSS
          background: 'linear-gradient(45deg, #fbc02d 30%, #b28900 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    },

});

ReactDOM.render(

  <div>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </div>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
