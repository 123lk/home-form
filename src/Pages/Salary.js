import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Salary extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={{width: '100%', height: 400, marginTop: '12em'}}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div>
                    <Line percent="75" strokeWidth="1" strokeColor="green"/>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <FormControl component="fieldset" >
                  <FormLabel component="legend">Salary</FormLabel>
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                    >
                      <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
                      <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
                      <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
                      <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
                      <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' style={{marginTop: '0.5em'}}>
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
