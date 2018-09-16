import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Line } from 'rc-progress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {saveName} from '../actions/index.js';

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
    const name = {firstName: this.state.firstName, lastName: this.state.lastName}
    console.log(name)
    this.props.saveName(name);
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Grid container spacing={24} >
          <Grid item sm={3} />
          <Grid item xs={12} sm={6}>
            <Paper style={{width: '100%', height: 400, marginTop: '10em'}}>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={8} sm={8}>
                  <div style={{marginBottom: '3em'}}>
                    <Line percent="25" strokeWidth="1" strokeColor="green" />
                  </div>
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="firstName"
                    label="First name"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName').bind(this)}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <TextField
                    id="lastName"
                    label="Last name"
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName').bind(this)}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24} direction='row' style={{marginTop: '6em'}}>
                <Grid item container justify='flex-end' alignItems='flex-end' xs={10}>
                  <Button variant="contained" component={Link} to='/contact' onClick={this.handleClick.bind(this)}>Next</Button>
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

function mapStateToProps(state) {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveName: name => {dispatch(saveName(name))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Name);
