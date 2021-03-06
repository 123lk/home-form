import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';

class Name extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleClick() {
    localStorage.setItem('firstName', this.state.firstName)
    localStorage.setItem('lastName', this.state.lastName)
    this.props.history.push('/contact')
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
                    <Line percent="25" strokeWidth="1" strokeColor="darkGray" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="firstName"
                    label="First name"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName').bind(this)}
                    fullWidth={true}
                    className="text-field"          
                    />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="lastName"
                    label="Last name"
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName').bind(this)}
                    fullWidth={true}
                  />
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
    height: 400, 
    marginTop: '20%'
  },
  progressBarContainer: {
    marginBottom: '5%', 
    marginTop: '5%'
  },
  buttonContainer: {
    marginTop: '5%'
  }
}

export default Name;
