import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {JobInformation} from "./JobInformation";
//I commented out all instance of ConfirmationDialog. Will implement after demo.
//import {ConfirmationDialog} from "./ConfirmationDialog.js";

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends Component {
    constructor(props) {
        super(props);
        //currently hardcoding values for testing
        this.state = {timesheets: ["apple"], accept: null, timesheetID: "1234"};
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    /*dialogTitle = "";
    dialogContent = "";*/
    workOrderID = "";
    workerName = "";
    startTime = "";
    endTime = "";

    /*componentDidMount() {
        fetch('/timesheets/list')
            .then(res => res.json())
            .then(json => this.setState({ timesheets: json }))

    }*/

    componentDidMount() {
        fetch('/timesheets/list')
            .then(res => res.json())
            .then(json => this.setState({ timesheets: json }))
    }

    handleApproveClick = () => {
        /*this.setState({accept: true, openDialog: true});
        this.dialogTitle = 'Confirm Timesheet Approval';
        this.dialogContent = 'Are you sure that you want to approve this timesheet?';*/

        this.state.timesheetID = this.state.timesheetID.toString();
        fetch('/timesheets/reject', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.timesheetID)
        })
    }

    handleRejectClick = () => {
        /*this.setState({accept: false, openDialog: true});
        this.dialogTitle = 'Confirm Timesheet Rejection';
        this.dialogContent = 'Are you sure that you want to reject this timesheet?';*/

        this.state.timesheetID = this.state.timesheetID.toString();
        fetch('/timesheets/reject', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.timesheetID)
        })
    }

     render() {

        return (
            //To-do: figure out how to get work order ID, worker name, start time, and end time from back-end.
            //These values are currently hard-coded.
            <div>
                <h1>Review Timesheet</h1>
                <br/>

                <h2>Work Order ID: 1234</h2>
                <h2>Worker: Paul Gries</h2>

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