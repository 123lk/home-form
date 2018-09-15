import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Salary extends Component {
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
                    <Line percent="75" strokeWidth="1" strokeColor="green" />
                  </div>
                  <div>Salary page</div>
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' >
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                  <span>
                    <Button variant="contained" component={Link} to='/contact'>Back</Button>
                  </span>
                  <span>
                    <Button variant="contained" component={Link} to='/summary'>Next</Button>
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

export default Salary;
