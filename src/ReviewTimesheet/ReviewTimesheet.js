import React, { Component } from 'react'

import { AppBar, Button, Typography, CheckBoxList, } from '@material-ui/'

class ReviewTimesheet extends Component {
    state = {
        orderList = []
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



    const {} = this.state;


    render () {
        constant
        return (
          <div className="App">
        )
    }
    
}