import React, { Component } from 'react'

import { AppBar, Button, Typography, CheckBoxList, } from '@material-ui/'

class ReviewTimesheet extends Component {
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
       if (currentIndex === -1) {
         newSkillsReq.push(value);
       } else {
         newOrderList.splice(currentIndex, 1);
       }

       this.setState({
         orderList: newOrderList
       });
     };



    render () {}
}
import React from 'react';
import ReactDOM from 'react-dom';
import {DisplayTimesheet} from "./DisplayTimesheet";

export default class ReviewTimesheet extends React.Component {
    render () {
        return (
            <div>
                <h1>Order L:</h1>
                <h1>Review Timesheet</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReviewTimesheet/>, document.getElementById('app'));
