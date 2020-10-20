import React, { useState } from 'react';
import PropTypes from 'prop-types' 
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import AboutSimplyBudget from './AboutSimplyBudget';

function NoUserLoggedIn(props) {
  const [formToShow, switchFormToShow] = useState("login");    
  const { submitTriggered } = props;
  const switchToLogin = () => {
    switchFormToShow("login");
  }

  const switchToSignUp = () => {
    switchFormToShow("signup");
  }

  return (
    <div className="no-user-logged-in-container">
      <nav className="not-logged-in-nav">
        <div className="nav-wrapper">
          <h4 className="no-padding-or-margin brand-logo">SimplyBudget</h4>
        </div>
      </nav>
      <header>
        <h2>Welcome!</h2>
      </header>
      <div className="form-container">
        {
          (formToShow === "login")
            ? <LogInForm toggle={switchToSignUp} submitTriggered={submitTriggered} />
            : <SignUpForm toggle={switchToLogin} submitTriggered={submitTriggered} />
        }
      </div>
      <AboutSimplyBudget />
    </div>
  )
};

export default NoUserLoggedIn;

NoUserLoggedIn.propTypes = {
  submitTriggered: PropTypes.func
}