import React from 'react';
import ReactDOM from 'react-dom';
//import {DisplayTimesheet} from "./DisplayTimesheet";

import '../App.css';
import Button from '@material-ui/core/Button';
import styleToImport from "../Utilities/Util";

const chosenStyle = styleToImport.styleToImport

export default class ReviewTimesheet extends React.Component {
    /*getOrderId(){
        //Get this timesheet's order id from database. Return as a string.
        return "L";
    };*/

    render () {
        return (
            <div className="App">
                <h1>Order L:</h1>
                <h1>Review Timesheet</h1>


            </div>
        );
    }
}

