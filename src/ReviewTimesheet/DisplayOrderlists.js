import React, { component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import styleToImport from '../Utilities/Util.js'

import FormControl from '@material-ui/core/FormControl';


const chosenStyle = styleToImport.styleToImport;

//Helper function ()
// const getApprovedTs = (obj) => {
//   return obj !== '' ? obj.firstName + " " + obj.lastName : ''
// };
// const getRejectedTs = (obj) => {
//   return obj !== '' ? obj.firstName + " " + obj.lastName : ''
// };
// const getPendingTs = (obj) => {
//   return obj !== '' ? obj.firstName + " " + obj.lastName : ''
// };



class DisplayOrderlists extends React.Component {

// componentDidMount() {
        
//         fetch('/timesheets/get_pending_timesheets_from_work_order_id/' + this.props.workOrderID)
//             .then(res => res.json())
//             .then(json => this.setState({ timesheet: JSON.stringify(json).split("},").slice(0, 1) }));

//         fetch('/employees/list')
//             .then((res) => res.json())
//             .then(json => this.setState({ employees: JSON.stringify(json).split("},") }));
//     }
handlePendingClick = () => {
  this.props.history.push('/SpecificOrder');
};

handleNotpendingClick = () => {
  this.props.history.push('/ReviewTimesheet');
};
  render(){
  return (
    <div className="App">
    <form>
    <FormControl style={chosenStyle}>
      <List component="nav">
      <ListItem button variant="contained" size="large" color="primary" onClick={this.handlePendingClick}>
          <ListItemText primary="Order L" secondary="Pending Approval" />
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button variant="contained" size="large" color="primary" onClick={this.handlePendingClick}>
          <ListItemText primary="Order M" secondary="Rejected" />
          <ListItemIcon>
            <HighlightOffIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button variant="contained" size="large" color="primary" onClick={this.handleNotpendingClick}>
          <ListItemText primary="Order N" secondary="Complete" />
          <ListItemIcon>
            <CheckBoxIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      </FormControl>
      </form>
    </div>
  );
}
}



export default DisplayOrderlists;
