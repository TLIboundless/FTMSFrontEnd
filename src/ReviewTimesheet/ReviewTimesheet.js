import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {JobInformation} from "../Job In Progress/JobInformation";

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends Component {
    constructor(props) {
        super(props);
        //Hard-coded work order ID and job ID. Want work order ID to be passed in as props of ReviewTimesheet component instance.
        this.state = {workOrderID: 2, jobID: 0, employees: ['No employees.'], timesheet: ['No timesheet.']};
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    componentDidMount() {
        fetch('/timesheets/get_pending_timesheets_from_work_order_id/' + this.state.workOrderID)
            .then(res => res.json())
            .then(json => this.setState({ timesheet: JSON.stringify(json).split("},").slice(0, 1) }));

        fetch('/employees/list')
            .then((res) => res.json())
            .then(json => this.setState({ employees: JSON.stringify(json).split("},") }));
    }

    getWorkOrderID() {
        //Return the work order ID for a given timesheet.
        return this.state.workOrderID;
    }

    getWorkerName() {
        let i = 0;
        if (this.state.timesheet !== [] && this.state.employees) {
            // First get worker ID from current timesheet.
            let id = '1';//this.state.timesheets.slice(this.state.timesheets.search("workerID") + 10,
                //this.state.timesheets.search("supervisorID") - 2);

            //Now find the name of the worker that matches that ID.
            for (i = 0; i < this.state.employees.length; i++) {
                if (this.state.employees[i].slice(this.state.employees[i].search("id") + 4,
                    this.state.employees[i].search("lastName") - 2) === id) {
                    return this.state.employees[i].slice(this.state.employees[i].search("firstName") + 12,
                        this.state.employees[i].search("email") - 3) + " " + this.state.employees[i].slice(
                            this.state.employees[i].search("lastName") + 11,
                        this.state.employees[i].search("firstName") - 3);
                }
            }
            return "No employee on file.";
        } else return "";
    }

    getStartTime() {
        return this.state.timesheet[0].slice(
            this.state.timesheet[0].search("start_time") + 12, this.state.timesheet[0].search("end_time") - 2)
    }

    getEndTime() {
        return this.state.timesheet[0].slice(
            this.state.timesheet[0].search("end_time") + 10, this.state.timesheet[0].search("timesheetId") - 2)
    }

    handleApproveClick = () => {
        fetch('/timesheets/approve', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.state.timesheet[0].slice(this.state.timesheet[0].search("timesheetId") + 13,
                this.state.timesheet[0].search("timeSubmitted") - 2) //this is timesheet id
        })
            .then(alert('Timesheet approved.'));

        window.location.reload()
    }

    handleRejectClick = () => {
        fetch('/timesheets/reject', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.state.timesheet[0].slice(this.state.timesheet[0].search("timesheetId") + 13,
                this.state.timesheet[0].search("timeSubmitted") - 2)
        })
            .then(alert('See http://localhost:8080/timesheets/list'))
    }

     render() {
        let pendingTimesheets = this.state.timesheet[0].search("timesheetId") !== -1;
        return pendingTimesheets ? (
            <div>
                <p>Employees: {this.state.employees}</p>
                <p>Timesheets: {this.state.timesheet}</p>
                <h1>Review Timesheet</h1>
                <br/>

                <h2>Work Order ID: {this.getWorkOrderID()}</h2>
                <h2>Worker: {this.getWorkerName()}</h2>

                <h3>
                    Start Time: {this.getStartTime()}
                    <br/>
                    End Time: {this.getEndTime()}
                </h3>
                <br/> <br/>

                <JobInformation workOrderID={this.state.workOrderID} jobID={this.state.jobID}/>
                <br/> <br/>
                <br/> <br/>
                <Button variant="contained" size="large" color="secondary" onClick={this.handleApproveClick}>APPROVE</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="large" color="secondary.dark" onClick={this.handleRejectClick}>REJECT</Button>

            </div>
        ) : <h1>No more timesheets to review.</h1>;
    }
}