import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Summary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      salary: localStorage.getItem('salary')
    };
  }
  render () {
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={{width: '100%', height: 500, marginTop: '6em'}}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div>
                    <Line percent="100" strokeWidth="1" strokeColor="green" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                    <TextField
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
              <Grid container spacing={24} direction='row'>
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                    <Button variant="contained">Submit</Button>
                </Grid>
              </Grid>
            </Paper> 
          </Grid>
          <Grid item sm={3} />
        </Grid>
      </div>
    );
  }
}

export default Summary;
