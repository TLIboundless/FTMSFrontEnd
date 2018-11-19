import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import WorkOrder from '../WorkOrder/WorkOrder.js'
import AssignJob from '../AssignJob/AssignJob.js'
import ReviewTimesheet from '../ReviewTimesheet/ReviewTimesheet.js';
import DisplayOrderlists from '../ReviewTimesheet/DisplayOrderlists';

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

// Check out Restful APIs

class App extends Component {
  state = {
    drawerOpen: false
  }

  toggleDrawer = (isOpen) => () => {
    this.setState({
      drawerOpen: isOpen
    });
  };

  changePage = (path) => () => {
    window.location = path
  }

  render() {
    const sideList = (
      <List>
        <ListItem button onClick={this.changePage('/CreateWorkOrder')}>
          <ListItemText primary="Create Work Order" />
        </ListItem>

        <ListItem button onClick={this.changePage('/AssignJob')}>
          <ListItemText primary="Assign to job employee" />
        </ListItem>

        <ListItem button onClick={this.changePage('/DisplayOrderlists')}>
          <ListItemText primary="Display the lists of orders" />
        </ListItem>

        //This page should actually only be accessed when you choose to review
        //timesheets from the page that details the job.
        //But this page is here for now because we don't have that other page yet.
        <ListItem button onClick={this.changePage('/ReviewTimesheet')}>
            <ListItemText primary="Review Timesheets" />
        </ListItem>
      </List>
    )

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer(true)} />
            </IconButton>
            <Button color="inherit">Norweld</Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
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
          <Route path='/CreateWorkOrder' component={WorkOrder}/>
          <Route path='/AssignJob' component={AssignJob} />
          <Route path='/DisplayOrderlists' component={DisplayOrderlists} />
          <Route path='/ReviewTimesheet' component={ReviewTimesheet} />
        </Switch>

      </div>
    );
  }
}

export default App;