import React, { Component } from 'react';

import '../App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport;
// styleToImport is an object with property styleToImport
// alert(JSON.stringify(styleToImport))

const SUPERVISOR_ID = 999

//Helper functions
const getFullName = (obj) => {
  return obj !== '' ? obj.firstName + " " + obj.lastName : ''
}

const getWorkOrderID = (obj) => {
  return obj.id
}

export default class AssignJob extends Component {
  state = {
    selectedWorkOrder: '',
    selectedEmployee: '',
    employeeList: ['No employee'],
    workOrderList: ['No work order']
  };

  componentDidMount() {
    fetch('/work_orders/list')
      .then(res => res.json())
      .then(json => this.setState({ workOrderList: json }))

    fetch('/employees/list')
      .then((res) => res.json())
      .then(json => this.setState({ employeeList: json }));
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/jobs/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        worker_id: this.state.selectedEmployee.id,
        workorder_id: getWorkOrderID(this.state.selectedWorkOrder),
        supervisor_id: SUPERVISOR_ID
      })
    })
      .then(alert('Success! See http://localhost:8080/jobs/list'))
  };

  // We need info from backend for the following 2 methods
  fetchWorkOrders = () => {
    return this.state.workOrderList
  };

  fetchEmployees = () => {
    return this.state.employeeList
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeWorkOrder = event => {
    const workOrderList = this.fetchWorkOrders();
    const result = workOrderList.filter(workOrder => getWorkOrderID(workOrder) == event.target.value);
    this.setState({ [event.target.name]: result[0] });
  };

  handleChangeEmployee = event => {
    const employeeList = this.fetchEmployees();
    const result = employeeList.filter(employee => getFullName(employee) == event.target.value);
    this.setState({ [event.target.name]: result[0] });
  }


  render() {
    const employeeList = this.fetchEmployees();
    const workOrderList = this.fetchWorkOrders();
    return (
      <div className="App">
        <form >
          <FormControl style={chosenStyle}>
            <InputLabel>Choose employee</InputLabel>
            <Select
              input={<Input name="selectedEmployee" />}
              value={getFullName(this.state.selectedEmployee)}
              onChange={this.handleChangeEmployee}
            >
              {employeeList.map(employee => (
                <MenuItem value={getFullName(employee)}>{getFullName(employee)}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl style={chosenStyle}>
            <InputLabel>Choose work order</InputLabel>
            <Select
              input={<Input name="selectedWorkOrder" />}
              value={getWorkOrderID(this.state.selectedWorkOrder)}
              onChange={this.handleChangeWorkOrder}
            >

              {workOrderList.map(workOrder => (
                <MenuItem value={getWorkOrderID(workOrder)}>{getWorkOrderID(workOrder)}</MenuItem>
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
