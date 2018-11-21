import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {JobInformation} from "../Job In Progress/JobInformation";

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends Component {
    constructor(props) {
        super(props);
        this.state = {timesheets: ['No timesheets.'], employees: ['No employees.']};
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    componentDidMount() {
        fetch('/timesheets/list')
            .then(res => res.json())
            .then(json => this.setState({ timesheets: JSON.stringify(json).split(",").slice(4) }));

        fetch('/employees/list')
            .then((res) => res.json())
            .then(json => this.setState({ employees: JSON.stringify(json).split("},") }));
    }

    getWorkOrderID() {
        //Return the work order ID for a given timesheet.
        return this.state.timesheets ? this.state.timesheets[0].slice(this.state.timesheets[0].search(":")+1) : "";
    }

    getWorkerName() {
        let i = 0;
        if (this.state.timesheets.length > 1 && this.state.employees) {
            // First get worker ID.
            let id = "1";
            //let id = this.state.timesheets[2].slice(this.state.timesheets[2].search(":") + 1,
                //this.state.timesheets[2].length - 2);

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
        } else return "";
    }

    handleApproveClick = () => {
        //Need to convert timesheetID to int because back-end approve method takes int parameter.
        let timesheetID = parseInt(this.state.timesheets[1].slice(this.state.timesheets[1].search(":") + 1), 10);
        fetch('/timesheets/approve', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: timesheetID
        })
            .then(alert('See http://localhost:8080/timesheets/list'))
    }

    handleRejectClick = () => {
        //Need to convert timesheetID to int because back-end approve method takes int parameter.
        let timesheetID = parseInt(this.state.timesheets[1].slice(this.state.timesheets[1].search(":") + 1), 10);
        fetch('/timesheets/reject', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: timesheetID
        })
            .then(alert('See http://localhost:8080/timesheets/list'))
    }

     render() {
        return (
            //To-do: figure out how to get start time and end time from back-end.
            //These values are currently hard-coded.
            <div>
                <h1>Review Timesheet</h1>
                <br/>

                <h2>Work Order ID: {this.getWorkOrderID()}</h2>
                <h2>Worker: {this.getWorkerName()}</h2>

                <h3>
                    Start Time: 12:00
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    End Time: 15:30
                </h3>
                <br/> <br/>

                <JobInformation/>
                <br/> <br/>
                <br/> <br/>
                <Button variant="contained" size="large" color="secondary" onClick={this.handleApproveClick}>APPROVE</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="large" color="secondary.dark" onClick={this.handleRejectClick}>REJECT</Button>

            </div>
        );
    }
}