import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import WorkOrder from '../WorkOrder/WorkOrder.js'

import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
  state={
    drawerOpen: false
  }

  toggleDrawer = (isOpen) => (isOpen) => {
    this.setState({
      drawerOpen: isOpen
    });
  };

  render() {
    const sideList = (
      <div>
        <List>
            <ListItem button >
              <ListItemText primary="Create Work Order" />
            </ListItem>
            <ListItem button >
              <ListItemText primary="Assign to job employee" />
            </ListItem>
        </List>
        </div>)

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer(true)}/>
            </IconButton>
            <Button color="inherit">Norweld</Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
          hysteresis={0.1}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>

        <Switch>
          <Route exact path='/' component={WorkOrder} />
        </Switch>

      </div>
    );
  }
}

export default App;