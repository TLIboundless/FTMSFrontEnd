import React, {Component} from 'react';

import '../App.css';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import styleToImport from "../Utilities/Util";
import Button from "@material-ui/core/Button/Button";

const chosenStyle = styleToImport.styleToImport;

export default class SubmitTimesheet extends Component {

  state = {
    job_id: '5',
    work_order_id: '2',
    worker_id: '',
    location: '',
    start: '',
    end: '',
    description: '',
    taskList: [], // list of tasks
    partsList: [], // List of parts
  };

  componentDidMount() {
    // Get associated work order (based on id, to fetch description)
    fetch('/work_orders/get_from_id/' + this.state.work_order_id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => this.setState({
        description: json.description,
        location: json.location
      }));

    fetch('/work_orders/get_from_id/' + this.state.job_id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => this.setState({
        worker_id: json.worker_id
      }));

    // Get tasks
    fetch('/task/get/' + this.state.job_id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then(json => this.setState({ taskList: json}));
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/timesheets/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        worker_id: this.state.worker_id,
        job_id: this.state.job_id,
        start_time: this.state.start,
        end_time: this.state.end,
      })
    })
      .then(alert(JSON.stringify(this.state)))
  };

  handleChangeText = input => event => {
    this.setState({
      [input]: event.target.value,
    });
  };

  handlePanelOpen = input => event => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <TextField
            id="datetime-job-start"
            label="Start time"
            value={this.state.start}
            onChange={this.handleChangeText('start')}
            type="datetime-local"
            style={chosenStyle}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <br/>
          <TextField
            id="datetime-job-end"
            label="End time"
            value={this.state.end}
            onChange={this.handleChangeText('end')}
            type="datetime-local"
            style={chosenStyle}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <br/>
          <ExpansionPanel id="description-panel" onChange={this.handlePanelOpen('panel1')} style={chosenStyle}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <text>Description</text>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <text
                id="standard-description"
                onChange={this.handleChangeText('description')}
                style={chosenStyle}
              >
                {this.state.description}
              </text>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel id="task-panel" onChange={this.handlePanelOpen('panel2')} style={chosenStyle}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <text>Tasks</text>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Table>


              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </form>
        <br/>
        <Button variant="contained" color="secondary" onClick={this.onSubmit}>
          Send
        </Button>
      </div>
    );
  }
}
