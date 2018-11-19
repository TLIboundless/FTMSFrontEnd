import React, { component } from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

// const chosenStyle = styleToImport.styleToImport;
// const styles = theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   }
// });

// export default class DisplayOrderlist extends Component {

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className="App">
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Order L" secondary="Pending Approval" />
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Order M" secondary="In progress" />
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Order N" secondary="Complete" />
          <ListItemIcon>
            <CheckBoxIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(chosenStyle)(SimpleList);
