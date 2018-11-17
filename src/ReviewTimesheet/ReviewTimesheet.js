import React from 'react';
import ReactDOM from 'react-dom';
import {DisplayTimesheet} from "./DisplayTimesheet";

export default class ReviewTimesheet extends React.Component {
    render () {
        return (
            <div>
                <h1>Order L:</h1>
                <h1>Review Timesheet</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReviewTimesheet/>, document.getElementById('app'));