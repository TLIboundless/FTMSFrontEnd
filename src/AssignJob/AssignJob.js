import React, { Component } from 'react';

import '../App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport
// styleToImport is an object with property styleToImport
// alert(JSON.stringify(styleToImport))

export default class AssignJob extends Component {
  state = {
    selectedWorkOrder: '',
    selectedEmployee: '',
    groups: ['Hey']
  }

  // Copies the json from database to 'groups'
  componentDidMount() {
    fetch('/task/all')
      .then(res => res.json())
      .then(json => this.setState({ groups: json }));
  }


  // Need to send the data to the backend
  onSubmit = (event) => {
    alert(JSON.stringify(this.state)) //Show what's going on

    //Send! (At least, in theory) NOT YET WORKING
    event.preventDefault();

    fetch('/rest/task/insert', {
    fetch('/employees/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        job_id: this.state.selectedWorkOrder.id,
        worker_id: this.state.selectedEmployee.id,
        name: this.state.selectedEmployee.name,
        start_time: '',
        end_time: '',
        duration: ''
        firstName: 'John',
        lastName: 'Doe',
        workerType: 'Supervisor',
        email: 'Email'
      })
    })
      .then((res) => res.json())
      .then(json => this.setState({ groups: json }));
  }

  // We need info from backend for the following 2 methods
  fetchWorkOrders = () => {
    let workOrder1 = { id: 111, location: 'Toronto', deadline: '7 Dec', skillsReq: ['Swimming'], description: 'Swim in AC' }
    let workOrder2 = { id: 123, location: 'Ryerson', deadline: '8 Dec', skillsReq: ['Petting a dog'], description: 'Pet a dog in front of Ryerson' }

    return [workOrder1, workOrder2]
  }

  fetchEmployees = () => {
    let employee1 = { id: 10, name: 'Paul Gries' }
    let employee2 = { id: 20, name: 'Mike McCarthy' }

    return [employee1, employee2]
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const employeeList = this.fetchEmployees()
    const workOrderList = this.fetchWorkOrders()
    return (
      <div className="App">
        <form >
          <FormControl style={chosenStyle}>
            <InputLabel>Choose employee</InputLabel>
            <Select
              input={<Input name="selectedEmployee" />}
              value={this.state.selectedEmployee}
              onChange={this.handleChange}
            >
              {employeeList.map(employee => (
                <MenuItem value={employee.name}>{employee.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl style={chosenStyle}>
            <InputLabel>Choose work order to assign</InputLabel>
            <Select
              input={<Input name="selectedWorkOrder" />}
              value={this.state.selectedWorkOrder}
              onChange={this.handleChange}
            >

              {workOrderList.map(workOrder => (
                <MenuItem value={workOrder.id}>{workOrder.id}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <br />
        <Button variant="contained" color="secondary" onClick={this.onSubmit}>
          Send
      </Button>
      </div>
    )
  }
}
