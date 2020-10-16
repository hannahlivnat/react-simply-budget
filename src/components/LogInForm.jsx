import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function LoginForm(props) {
  return (
    <form>
      <h4>Login:</h4>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" aria-describedby="Username"></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password"></Input>
      </FormControl>
      <Button className="button">Login</Button>
      <p>Don't Have an Account? <a onClick={props.toggle}>Register.</a></p>
    </form>
  )
}

export default LoginForm;