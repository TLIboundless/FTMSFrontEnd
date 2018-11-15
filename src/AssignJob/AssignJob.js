import React, { Component } from 'react';

import '../App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


export default class AssignJob extends Component {
  state = {
    selectedWorkOrder: '',
    selectedEmployee: 1000,
  }

  onSubmit = () => {
    alert(JSON.stringify(this.state))
  }

  fetchWorkOrders = () => {
    let workOrder1 = { id: '111', location: 'Toronto', deadline: '7 Dec', skillsReq: ['Swimming'], description: 'Swim in AC' }
    let workOrder2 = { id: '123', location: 'Ryerson', deadline: '8 Dec', skillsReq: ['Petting a dog'], description: 'Pet a dog in front of Ryerson' }

    return [workOrder1, workOrder2]
  }

  fetchEmployees = () => {
    let employee1 = 10
    let employee2 = 20

    return [employee1, employee2]
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    alert(event.target.name+ "   "+ event.target.value + "    " +this.state.selectedEmployee)
  };

  render() {
    const employeeList = this.fetchEmployees()

    return (
      <div className="App">
      <form>
        <FormControl>
          <InputLabel>Choose employee</InputLabel>
          <Select
            input={<Input name="selectedEmployee"/>}
            value={this.state.selectedEmployee}
            onChange={this.handleChange}
          >

          {employeeList.map(employee => (
            <MenuItem value={employee}>{employee}</MenuItem>
          ))}
          </Select>

        </FormControl>
      </form>
      <Button variant="contained" color="primary" onClick={this.onSubmit}>
          Send
      </Button>
      </div>
    )
  }
}