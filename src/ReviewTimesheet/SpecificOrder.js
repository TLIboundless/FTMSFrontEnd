import React, { Component } from 'react'


import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'
import { JobInformation } from "../Job In Progress/JobInformation";


const chosenStyle = styleToImport.styleToImport

export default class SpecificOrder extends Component {
  constructor(props) {
    super(props);
    // this.state = {timesheets: ['No timesheets.'], employees: ['No employees.'], jobID: 0};
    this.handleTimesheetClick = this.handleTimesheetClick.bind(this);
  }


  // WorkersOnTask = "";
  // WorkersAwaitingApproval = "";

  // componentDidMount() {
  //     fetch('/task/all')
  //         .then(res => res.json())
  //         .then(json => this.setState({ groups: json }));  
  // }  /// need to modify???

  handleTimesheetClick = () => {
    this.props.history.push('/ReviewTimesheet');
  };


  render() {
    return (
      //To-do: figure out how to get work order ID, worker name, start time, and end time from back-end.
      //These values are currently hard-coded.
      <div>
        <h1>Pending Approval</h1>

        <h2>
          Workers on task: 3
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          Workers awaiting approval: 1
                </h2>


        <br /> <br />

        <Button variant="contained" size="large" color="secondary" onClick={this.handleTimesheetClick}>Review Pending Timesheet</Button>

        <br /> <br />
          <br /> <br />


          <JobInformation />
        <br /> <br />
        <br /> <br />

      </div>
    );
  }
}