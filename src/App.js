import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={{width: '100%', height: 400, marginTop: '6em'}}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div>
                    <Line percent="25" strokeWidth="1" strokeColor="green" />
                  </div>
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="name"
                    label="First name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="name"
                    label="Last name"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' >
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                  <Button variant="contained" component={Link} to='/contact'>Next</Button>
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

export default App;
