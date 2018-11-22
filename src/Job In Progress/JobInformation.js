//This is a generic template for displaying job/timesheet information.
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import styleToImport from '../Utilities/Util.js'

const chosenStyle = styleToImport.styleToImport;

export class JobInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: 'No description yet.', tasks: ['No tasks yet.'], parts: ['No parts yet.']}
        this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
        this.handleTasksClick = this.handleTasksClick.bind(this);
        this.handlePartsClick = this.handlePartsClick.bind(this);
    }

    componentDidMount() {
        fetch('/work_orders/get_from_work_orders_id/' + this.props.workOrderID)
            .then(res => res.json())
            .then(json => this.setState({ description: JSON.stringify(json)}));

        fetch('/task/get_from_jobs_id/' + this.props.jobID)
            .then((res) => res.json())
            .then(json => this.setState({ tasks: JSON.stringify(json).split("},") }));

        fetch('/parts/get_parts_from_job_id/' + this.props.jobID)
            .then((res) => res.json())
            .then(json => this.setState({ parts: JSON.stringify(json).split("},") }));

    }

    handleDescriptionClick() {
        //Display job description.
        alert('Job Description: ' + this.state.description.slice(this.state.description.search("description") + 14,
            this.state.description.search("]") - 2))
    }

    handleTasksClick() {
        //Display tasks.
        let s = "";
        let i = 0;
        for (i = 0; i < this.state.tasks.length; i++) {
            s += 'Name: ' + this.state.tasks[i].slice(this.state.tasks[i].search("name") + 6,
                this.state.tasks[i].search("jobId") - 2) + ', Duration: ' +
                this.state.tasks[i].slice(this.state.tasks[i].search("duration") + 10,
                this.state.tasks[i].search("name") - 2) + '\r'
        }
        alert('Tasks Completed: \r\r' + s)
    }

    handlePartsClick() {
        //Display parts.
        let s = "";
        let i = 0;
        for (i = 0; i < this.state.parts.length; i++) {
            s += 'Name: ' + this.state.parts[i].slice(this.state.parts[i].search("name") + 6,
                this.state.parts[i].search("unit_price") - 2) + ', Unit Price: ' +
                this.state.parts[i].slice(this.state.parts[i].search("unit_price") + 12,
                    this.state.parts[i].search("quantity") - 2) + ', Quantity: ' +
                this.state.parts[i].slice(this.state.parts[i].search("quantity") + 10,
                    this.state.parts[i].search("job_id") - 2) + '\r'
        }
        alert('Parts: \r\r' + s)
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