import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {JobInformation} from "./JobInformation";
import {ConfirmationDialog} from "./ConfirmationDialog";

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends Component {
    constructor(props) {
        super(props);
        this.state = {orderList: [], accept: null};
        this.handleApproveClick = this.handleApproveClick.bind(this);
    }

    onSubmit = () => {
        alert(JSON.stringify(this.state))
     }
    handleToggle = value => () => {
       const { orderList } = this.state;
       const currentIndex = orderList.indexOf(value);
       const newOrderList = [...orderList];
       if (currentIndex !== -1) {
         newOrderList.splice(currentIndex, 1);
       }

       this.setState({
         orderList: newOrderList
       });
     };

    handleApproveClick() {
        this.setState({accept: true});
        //To-do: Find some way of making this alert have yes/no buttons.
        //Yes button takes you back to page of all orders, and edits database
        //to represent timesheet approval.
        //No button closes alert and keeps you on screen.
    }

    handleRejectClick() {
        alert("Are you sure that you want to reject this timesheet?");
        //To-do: Find some way of making this alert have yes/no buttons.
        //Yes button takes you back to page of all orders, and edits database
        //to represent timesheet rejection.
        //No button closes alert and keeps you on screen.
    }

    handleBackClick() {
        //Change page to order page.
    }

     render () {
        return (
            //To-do: figure out how to get work order ID, worker name, start time, and end time from back-end.
            //These values are currently hard-coded.
            <div>
                <div style={{textAlign:"left"}}>
                    <br/>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="contained">Back</Button>
                </div>
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

<<<<<<< HEAD
                <Button variant="contained" size="large" color="secondary">APPROVE</Button>
=======
                <Button variant="contained" size="large" color="primary" onClick={this.handleApproveClick}>APPROVE</Button>
>>>>>>> ca7b8668ff6b28ec0eb2ee8ca05bc1d5150bbedd
                <Button variant="contained" size="large" color="secondary" onClick={this.handleApproveClick}>APPROVE</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="large" color="secondary.dark">REJECT</Button>

            </div>
        );
    }
}
