import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function SignUpForm(props) {
  return (
    <form>
      <h4>Register:</h4>
      <FormControl margin="normal" className="half-width">
        <InputLabel htmlFor="first-name">First Name</InputLabel>
        <Input id="first-name" aria-describedby="First Name"></Input>
      </FormControl>
      <FormControl margin="normal" className="half-width">
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <Input id="last-name" aria-describedby="Last Name"></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" aria-describedby="Username"></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password"></Input>
      </FormControl>
      <Button className="button">Create Your Account</Button>
      <p>Already Have an Account? <a onClick={props.toggle}>Sign In.</a></p>
    </form>
  )
}

export default SignUpForm;