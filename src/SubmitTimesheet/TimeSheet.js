import React, {Component} from 'react';

import '../App.css';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';

class TimeSheet extends Component {

  state = {
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
          />
          <TextField
            id="datetime-job-end"
            label="End time"
            onChange={this.handleChange('end')}
          />

          <br/>
          <ExpansionPanel id="description-panel" expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Text>Description</Text>
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
