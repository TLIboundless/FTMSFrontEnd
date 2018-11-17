import React, { Component } from 'react';

import '../App.css';
import CheckBoxList from './CheckBoxList.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

class WorkOrder extends Component {
  state = {
    location: '',
    deadline: '',
    description: '',
    skillsReq: []
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onSubmit = () => {
    alert(JSON.stringify(this.state))
  }

  handleToggle = value => () => {
    const { skillsReq } = this.state;
    const currentIndex = skillsReq.indexOf(value);
    const newSkillsReq = [...skillsReq];

    if (currentIndex === -1) {
      newSkillsReq.push(value);
    } else {
      newSkillsReq.splice(currentIndex, 1);
    }

    this.setState({
      skillsReq: newSkillsReq,
    });
  };

  render() {
    return (
      <div className="App">

        <form>
          <TextField
            id="standard-location"
            label="Location"
            value={this.state.location}
            onChange={this.handleChange('location')}
            margin="normal"
            style={chosenStyle}
          />
          <br />

          <br />
          <TextField
            id="datetime-local"
            label="Deadline"
            value={this.state.deadline}
            onChange={this.handleChange('deadline')}
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            style={chosenStyle}
          />

          <br />
          <br />
          <CheckBoxList skillsReq={this.state.skillsReq} handleToggle={this.handleToggle} chosenStyle={chosenStyle}/>

          <TextField
            id="standard-description"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin="normal"
            multiline={true}
            rows={4}
            style={chosenStyle}
          />
        </form>

        <br />
        <Button variant="contained" color="primary" onClick={this.onSubmit}>
          Create work order
        </Button>
      </div>
    );
  }
}

export default WorkOrder;
