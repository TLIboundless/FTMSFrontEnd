//NOT GOING TO USE THIS IN DEMO BECAUSE IT DOESN'T WORK AND WE DON'T KNOW WHY.
import React from 'react';
import ReactDOM from 'react-dom';

import styleToImport from '../Utilities/Util.js'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const chosenStyle = styleToImport.styleToImport;

export class ConfirmationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: this.props.open};
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ open: false });
    };

    render() {
        return (
            <Dialog open={this.state.open}>
                <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{this.props.content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Yes
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}