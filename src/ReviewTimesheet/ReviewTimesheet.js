import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {DisplayTimesheet} from "./DisplayTimesheet";

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends Component {
    state = {
        orderList: []
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
        alert("Are you sure that you want to approve this timesheet?");
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
            //To-do: figure out how to get order id, start time, and end time from back-end.
            <div>
                <div style={{textAlign:"left"}}>
                    <br/>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="contained">Back</Button>
                </div>
                <h1>Order L: Review Timesheet</h1>
                <br/> <br/>

                <h3>Start Time: 12:00</h3>
                <h3>End Time: 15:30</h3>
                <br/> <br/>

                <Button variant="outlined" size="large">Job Description</Button>
                <br/> <br/>
                <Button variant="outlined" size="large">Tasks Completed</Button>
                <br/> <br/>
                <Button variant="outlined" size="large">Parts Used</Button>
                <br/> <br/>
                <br/> <br/>
                <br/> <br/>


                <Button variant="contained" size="large" color="primary">APPROVE</Button>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button variant="contained" size="large" color="primary">REJECT</Button>

            </div>
        );
    }
}