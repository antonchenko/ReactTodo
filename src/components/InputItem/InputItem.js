import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    errorStatus: false,
    helperText: ' ',
  };

  onButtonClick = () => {
    this.setState({
      inputValue: '',
      errorStatus: false,
      helperText: ' ',
    });

    if (this.state.inputValue && this.state.inputValue.length < 20) {
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        errorStatus: true,
        helperText: 'The field must not be empity or you exceeded the simbol limit',
      });
    }
  } 

 render() {

    return (<Grid>
       <TextField 
        error={this.state.errorStatus}
        helperText={this.state.helperText}
        fullWidth
        label="Type the name of the task"
        margin="dense"
        value={this.state.inputValue}
        variant="outlined"
        onChange={event => this.setState({inputValue: event.target.value })} />

    <Button 
        variant='contained'
        fullWidth
        style={{backgroundColor:"DarkViolet"}}
        onClick={this.onButtonClick}> 
                Add
    </Button>
    </Grid>);
  }
}

export default InputItem;