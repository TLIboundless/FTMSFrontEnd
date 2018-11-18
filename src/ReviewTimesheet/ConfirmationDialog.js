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

export default class ConfirmationDialog extends React.Component {
    state = {open: true};

    render() {
        return (
            <Dialog>

            </Dialog>
        );
    }
}