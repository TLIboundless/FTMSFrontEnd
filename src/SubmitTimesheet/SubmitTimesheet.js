import React, {Component} from 'react';

import '../App.css';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import styleToImport from "../Utilities/Util";

const chosenStyle = styleToImport.styleToImport;

export default class SubmitTimesheet extends Component {

  state = {
    job_id: '1',
    location: '',
    start: '',
    end: '',
    description: '',
    taskList: [], // list of tasks
    partsList: [], // List of parts
  };

  componentDidMount() {
    fetch('/jobs/fromID', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {id: this.state.job_id}
    })
      .then(res => res.json())
      .then(json => this.setState({ description: json.description }));

    fetch('/task/get_task', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {id: this.state.job_id}
    })
      .then((res) => res.json())
      .then(json => this.setState({ taskList: json}));
  }

  handleChange = input => event => {
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
            onChange={this.handleChange('start')}
            type="datetime-local"
            style={chosenStyle}
          />
          <br/>
          <TextField
            id="datetime-job-end"
            label="End time"
            onChange={this.handleChange('end')}
            type="datetime-local"
            style={chosenStyle}
          />
          <br/>
          <br/>
          <ExpansionPanel id="description-panel" onChange={this.handleChange('panel1')} style={chosenStyle}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <text>Description</text>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <TextField
                id="standard-description"
                label="Description"
                value={this.state.description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline={true}
                style={chosenStyle}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel id="task-panel" onChange={this.handleChange('panel2')} style={chosenStyle}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <text>Tasks</text>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Table>

              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </form>
      </div>
    );
  }
}
