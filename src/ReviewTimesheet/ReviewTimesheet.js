import React, { Component } from 'react'
import {JobInformation} from "../Job In Progress/JobInformation";

import Button from '@material-ui/core/Button';

// This uses props value workOrderID which should be passed in when this page is called.
// If you need to test this page without calling it in another page, assign workOrderID as a state value instead.
// Just don't forget to change it back!

export default class ReviewTimesheet extends Component {
    constructor(props) {
        super(props);
        this.state = {employees: ['No employees.'], timesheet: ['No timesheet.']};
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    componentDidMount() {
        fetch('/timesheets/get_pending_timesheets_from_work_order_id/' + this.props.workOrderID)
            .then(res => res.json())
            .then(json => this.setState({ timesheet: JSON.stringify(json).split("},").slice(0, 1) }));

        fetch('/employees/list')
            .then((res) => res.json())
            .then(json => this.setState({ employees: JSON.stringify(json).split("},") }));
    }

    getWorkOrderID() {
        //Return the work order ID for a given timesheet.
        return this.props.workOrderID;
    }

    getWorkerName() {
        //Use worker ID in timesheet to get corresponding worker name.
        let i = 0;
        let someEmployeeID = '';
        let s = '';

        if (this.state.timesheet[0].search("timesheetId") !== -1 && this.state.employees) {
            // First get worker ID from current timesheet.
            s = this.state.timesheet[0].slice(this.state.timesheet[0].search('worker_id'));
            let id = s.slice(11, s.search(','));

            //Now find the name of the worker that matches that ID.
            for (i = 0; i < this.state.employees.length; i++) {
                s = this.state.employees[i].slice(this.state.employees[i].search('id'));
                someEmployeeID = s.slice(4, s.search(','));
                if (someEmployeeID === id) {
                    s = this.state.employees[i].slice(this.state.employees[i].search('firstName'));
                    let firstName = s.slice(12, s.search(',') - 1);
                    s = this.state.employees[i].slice(this.state.employees[i].search('lastName'));
                    let lastName = s.slice(11, s.search(',') - 1);
                    return firstName + ' ' + lastName;
                }
            }
            return "No employee on file.";
        } else return "";
    }

    getStartTime() {
        let s = this.state.timesheet[0].slice(this.state.timesheet[0].search('start_time'));
        return s.slice(12, s.search(','));
    }

    getEndTime() {
        let s = this.state.timesheet[0].slice(this.state.timesheet[0].search('end_time'));
        return s.slice(10, s.search(','));
    }

    getTimesheetID() {
        let s = this.state.timesheet[0].slice(this.state.timesheet[0].search('timesheetId'));
        return s.slice(13, s.search(','));
    }

    getJobID() {
        let s = this.state.timesheet[0].slice(this.state.timesheet[0].search('jobId'));
        return s.slice(7, s.search(','));
    }

    handleApproveClick = () => {
        fetch('/timesheets/approve', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.getTimesheetID()
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
            body: this.getTimesheetID()
        })
            .then(alert('Timesheet rejected.'));

        window.location.reload()
    }

    render() {
        let pendingTimesheets = this.state.timesheet[0].search("timesheetId") !== -1;
        return pendingTimesheets ? (
            <div>
                <h1>Review Timesheet</h1>
                <br/>

                <h2>Work Order ID: {this.getWorkOrderID()}</h2>
                <h2>Timesheet ID: {this.getTimesheetID()}</h2>
                <h2>Worker: {this.getWorkerName()}</h2>

                <h3>
                    Start Time: {this.getStartTime()}
                    <br/>
                    End Time: {this.getEndTime()}
                </h3>
                <br/>

                <JobInformation workOrderID={this.props.workOrderID} jobID={this.getJobID()}/>
                <br/> <br/>
                <Button variant="contained" size="large" color="secondary" onClick={this.handleApproveClick}>APPROVE</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="large" color="secondary.dark" onClick={this.handleRejectClick}>REJECT</Button>

            </div>
        ) : <h1>No more timesheets to review.</h1>;
    }
}