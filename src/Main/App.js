import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import WorkOrder from '../WorkOrder/WorkOrder.js'

import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Norweld</Button>
          </Toolbar>
        </AppBar>
        
        <Switch>
          <Route exact path='/' component={WorkOrder}/>
        </Switch>

      </div>
    );
  }
}

export default App;