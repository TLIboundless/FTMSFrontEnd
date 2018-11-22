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


class DisplayOrderlists extends React.Component {

// function SimpleList(props) {
//   const { classes } = props;
  render(){
  return (
    <div className="App">
    <form>
    <FormControl style={chosenStyle}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Order L" secondary="Pending Approval" />
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Order M" secondary="Rejected" />
          <ListItemIcon>
            <HighlightOffIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
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
//   DisplayOrderlist.propTypes = {
//   classes: PropTypes.object.isRequired
// };



export default DisplayOrderlists;
