import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Contact extends Component {
  handleBackClick () {
    this.props.history.push('/');
  }
  render () {
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={{width: '100%', height: 400, marginTop: '12em'}}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div style={{marginBottom: '3em'}}>
                    <Line percent="50" strokeWidth="1" strokeColor="green" />
                  </div>
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="name"
                    label="Email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="name"
                    label="Phone number"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' style={{marginTop: '6em'}}>
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                  <span>
                    <Button variant="contained" onClick={this.handleBackClick.bind(this)}>Back</Button>
                  </span>
                  <span>
                    <Button variant="contained" component={Link} to='/salary'>Next</Button>
                  </span>
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

export default Contact;
