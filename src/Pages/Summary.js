import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Summary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      salary: localStorage.getItem('salary'),
      open: false
    };
  }

  handleClick () {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={styles.paper}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div style={styles.progressBarContainer}>
                    <Line percent="100" strokeWidth="1" strokeColor="darkGray" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                    <h3 style={{marginBottom: 0}}>Summary of details</h3>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                      style={{fontFamily: 'Exo, sans-serif'}}
                      id="firstName"
                      label="First name"
                      value={this.state.firstName}
                      fullWidth={true}
                    />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="lastName"
                    label="Last name"
                    value={this.state.lastName}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="phoneNumber"
                    label="Phone number"
                    value={this.state.phoneNumber}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="salary"
                    label="Salary"
                    value={this.state.salary}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' style={styles.buttonContainer}>
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                    <Button variant="outlined" color="secondary" style={{fontFamily: 'Exo, sans-serif'}} onClick={this.handleClick.bind(this)}>Submit</Button>
                </Grid>
              </Grid>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose.bind(this)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
              <DialogTitle id="alert-dialog-title">{'Thank you for submitting your details'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  A member of the Home team will be in touch shortly.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose.bind(this)} color="secondary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            </Paper> 
          </Grid>
          <Grid item sm={3} />
        </Grid>
      </div>
    );
  }
}

const styles = {
  paper: {
    width: '100%', 
    height: 600, 
    marginTop: '15%'
  },
  progressBarContainer: {
    marginTop: '5%'
  },
  buttonContainer: {
    marginTop: '20px'
  }
}

export default Summary;
