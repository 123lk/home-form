import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Salary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      salary: '0 - 1.000'
    };
  }

  handleChange (event) {
    this.setState({salary: event.target.value});
  }

  handleClick () {
    localStorage.setItem('salary', this.state.salary);
    this.props.history.push('/summary');
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
                    <Line percent="75" strokeWidth="1" strokeColor="darkGray"/>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <FormControl component="fieldset" >
                    <h3>Salary</h3>
                    <RadioGroup
                      value={this.state.salary}
                      onChange={this.handleChange.bind(this)}
                    >
                      <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000"/>
                      <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
                      <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
                      <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
                      <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' style={styles.buttonContainer}>
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                  <Button variant="outlined" color="secondary" onClick={this.handleClick.bind(this)}>Next</Button>
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

const styles = {
  paper: {
    width: '100%', 
    height: 490, 
    marginTop: '20%'
  },
  progressBarContainer: {
    marginBottom: '0%', 
    marginTop: '5%'
  },
  buttonContainer: {
    paddingBottom: '5%'
  }
};

export default Salary;
