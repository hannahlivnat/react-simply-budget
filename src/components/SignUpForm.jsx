import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function SignUpForm(props) {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [firstname, changeFirstName] = useState('');
  const [lastname, changeLastName] = useState('');
  const { toggle, submitTriggered } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: `${username}`, 
      password: `${password}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
    };
    submitTriggered("New User", formData);
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case "username": 
        changeUsername(e.target.value);
        break;
      case "password":
        changePassword(e.target.value);
        break;
      case "first-name": 
        changeFirstName(e.target.value);
        break;
      case "last-name": 
        changeLastName(e.target.value);
        break;
      default: 
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Register:</h4>
      <FormControl margin="normal" className="half-width">
        <InputLabel htmlFor="first-name">First Name</InputLabel>
        <Input id="first-name" aria-describedby="First Name" onChange={handleChange}></Input>
      </FormControl>
      <FormControl margin="normal" className="half-width">
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <Input id="last-name" aria-describedby="Last Name" onChange={handleChange}></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" aria-describedby="Username" onChange={handleChange}></Input>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password" onChange={handleChange} type="password"></Input>
      </FormControl>
      <Button className="button" type="submit">Create Your Account</Button>
      <p>Already Have an Account? <a onClick={toggle}>Sign In.</a></p>
    </form>
  )
}

export default SignUpForm;

SignUpForm.propTypes = {
  toggle: PropTypes.func,
  submitTriggered: PropTypes.func
}