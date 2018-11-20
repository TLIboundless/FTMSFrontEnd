//This is a generic template for displaying job/timesheet information.
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport;

export class JobInformation extends React.Component {

    handleDescriptionClick() {
        //Display job description. Need to get that info from backend.
        alert("Need to get description from back-end.")
    }

    handleTasksClick() {
        //Display tasks. Need to get that info from backend.
        alert("Need to get tasks from back-end.")
    }

    handlePartsClick() {
        //Display parts. Need to get that info from backend.
        alert("Need to get parts from back-end.")
    }

    render () {
        return (
            <div>
                <Button variant="outlined" size="large" onClick={this.handleDescriptionClick}>Job Description</Button>
                <br/> <br/>
                <Button variant="outlined" size="large" onClick={this.handleTasksClick}>Tasks Completed</Button>
                <br/> <br/>
                <Button variant="outlined" size="large" onClick={this.handlePartsClick}>Parts Used</Button>
            </div>
        );
    }
}