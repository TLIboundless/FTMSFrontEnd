import React, { Component } from 'react';

import '../App.css';
import TextField from '@material-ui/core/TextField';

class TimeSheet extends Component {

    state= {
        location: '',
        description: '',
        taskList: [],
        taskStartTime: [],
        taskEndTime: [],
        parts: [],
        partQty: [],
        partCost: [],
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value,
        });
    };

    render() {
        return(
          <div className="App">

              <form>
                  <TextField
                    id="datetime-job-start"
                    label="Start time"
                  />
                  <TextField
                    id="datetime-job-end"
                    label="End time"
                  />

                  <br />

                  <TextField
                      id="standard-description"
                      label="Description"
                      value={this.state.description}
                      onChange={this.handleChange('description')}
                      margin="normal"
                      multiline={true}
                  />
              </form>

          </div>
        );
    }
}

