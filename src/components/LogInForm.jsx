import React, { useState } from 'react';
import PropTypes from 'prop-types' 
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function LoginForm(props) {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const { toggle, submitTriggered } = props;

  const handleSubmit = () => {
    const formData = {username: `${username}`, password: `${password}`};
    submitTriggered("Existing User", formData);
  }

  const handleChange = (event) => {
    (event.target.id == "username")
      ? changeUsername(event.target.value)
      : changePassword(event.target.value)
    console.log(username, password)
  }

  return (
    <form>
      <h4>Login:</h4>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" aria-describedby="Username" onChange={handleChange}></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password" onChange={handleChange}></Input>
      </FormControl>
      <Button className="button" onClick={handleSubmit}>Login</Button>
      <p>Don't Have an Account? <a onClick={toggle}>Register.</a></p>
    </form>
  )
}

export default LoginForm;

LoginForm.propTypes = {
  toggle: PropTypes.func,
  submitTriggered: PropTypes.func
}