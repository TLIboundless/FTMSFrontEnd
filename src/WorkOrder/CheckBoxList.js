import React from 'react';

import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';

class CheckboxList extends React.Component {
  
  render() {
    let skillsList = ["Welding", "Driving a bulldozer"]

    return (
      <div >
        <List subheader={<ListSubheader>Skills required</ListSubheader>}>
          {skillsList.map(value => (
            <ListItem key={value} role={undefined} dense button onClick={this.props.handleToggle(value)}>
              <Checkbox
                checked={this.props.skillsReq.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={value} />
            
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CheckboxList;
