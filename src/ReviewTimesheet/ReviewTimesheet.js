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
        this.state = {orderList: [], accept: null};
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    /*dialogTitle = "";
    dialogContent = "";*/
    workOrderID = "";
    workerName = "";
    startTime = "";
    endTime = "";

    componentDidMount() {
        fetch('/task/all')
            .then(res => res.json())
            .then(json => this.setState({ groups: json }));
    }

    handleApproveClick = () => {
        /*this.setState({accept: true, openDialog: true});
        this.dialogTitle = 'Confirm Timesheet Approval';
        this.dialogContent = 'Are you sure that you want to approve this timesheet?';*/

        //To-do: Find some way of making this alert have yes/no buttons.
        //Yes button takes you back to page of all orders, and edits database
        //to represent timesheet approval.
        //No button closes alert and keeps you on screen.
    }

    handleRejectClick = () => {
        /*this.setState({accept: false, openDialog: true});
        this.dialogTitle = 'Confirm Timesheet Rejection';
        this.dialogContent = 'Are you sure that you want to reject this timesheet?';*/

        //To-do: Find some way of making this alert have yes/no buttons.
        //Yes button takes you back to page of all orders, and edits database
        //to represent timesheet rejection.
        //No button closes alert and keeps you on screen.
    }

     render () {
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
                <Button variant="contained" size="large" color="primary" onClick={this.handleApproveClick}>APPROVE</Button>
                <Button variant="contained" size="large" color="secondary" onClick={this.handleApproveClick}>APPROVE</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="large" color="secondary.dark" onClick={this.handleRejectClick}>REJECT</Button>

            </div>
        );
    }
}