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
    job_id: '',
    location: '',
    start: '',
    end: '',
    description: '',
    taskList: [],
    taskStartTime: [],
    taskEndTime: [],
    parts: [],
    partQty: [],
    partCost: [],
    expanded: null //Which panel is expanded
  };

  componentDidMount() {
    fetch('/jobs/')
      .then(res => res.json())
      .then(json => this.setState({ workOrderList: json }))

    fetch('/employees/list')
      .then((res) => res.json())
      .then(json => this.setState({ employeeList: json }));
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
          />
          <TextField
            id="datetime-job-end"
            label="End time"
            onChange={this.handleChange('end')}
            type="datetime-local"
          />

          <br/>
          <ExpansionPanel id="description-panel" expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <TextField
                id="standard-description"
                label="Description"
                value={this.state.description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline={true}
              />
            </ExpansionPanelDetails>

          </ExpansionPanel>

          <ExpansionPanel id="task-panel" expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

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
