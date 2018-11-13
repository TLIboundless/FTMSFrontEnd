import React, { Component } from 'react';
import '../App.css';
import CheckBoxList from './CheckBoxList.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class WorkOrder extends Component {
  state = {
    location: '',
    deadline: '',
    description: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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
          //fullWidth={true}
        />
        <br/>
        <TextField
          id="standard-deadline"
          label="Deadline"
          value={this.state.deadline}
          onChange={this.handleChange('deadline')}
          margin="normal"
        />
        <br/>
        <br/>
        <CheckBoxList/>

        <TextField
            id="standard-description"
            label="Description"
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin="normal"
            multiline={true}
            rows={4}
          />
        </form>

        <br/>
          <Button variant="contained" color="primary">
            Create work order
          </Button>
        </div>
    );
  }
}

export default WorkOrder;
