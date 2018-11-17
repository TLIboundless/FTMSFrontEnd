//This is a generic template for displaying job/timesheet information.
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport

export class JobInformation extends React.Component {
    render () {
        return (
            <div>
                <Button variant="outlined" size="large">Job Description</Button>
                <br/> <br/>
                <Button variant="outlined" size="large">Tasks Completed</Button>
                <br/> <br/>
                <Button variant="outlined" size="large">Parts Used</Button>
            </div>
        );
    }
}