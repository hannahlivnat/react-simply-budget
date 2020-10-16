import React, { useState } from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import AboutSimplyBudget from './AboutSimplyBudget';

function NoUserLoggedIn() {
  const [formToShow, switchFormToShow] = useState("login");    

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
            ? <LogInForm toggle={switchToSignUp}/>
            : <SignUpForm toggle={switchToLogin}/>
        }
      </div>
      <AboutSimplyBudget />
    </div>
  )
};

export default NoUserLoggedIn;