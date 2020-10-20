import React, { useState } from 'react';
import axios from 'axios';
import UserLoggedIn from './components/UserLoggedIn';
import NoUserLoggedIn from './components/NoUserLoggedIn';
import './css/App.css';

function App() {
  const [user, setUser] = useState({});
  const [userLoggedIn, isUserLoggedIn] = useState(false);

  // When new or existing user completes login/signup form, send data 
  // to api gateway that connects to user access step function
  const userAccessRequestTriggered = (newOrExisting, formData) => {
    console.log(newOrExisting, formData);
    //endpoint url
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const APIEndpoint = `https://${process.env.REACT_APP_API_ID}.execute-api.${process.env.REACT_APP_API_REGION}.amazonaws.com/${process.env.REACT_APP_PATH_VERSION}`;
    const stateMachine = `${process.env.REACT_APP_USER_ACCESS_ARN}`
    let headerObject = {};

    //set up input for signup or login
    (newOrExisting === "New User") 
      ? (
        headerObject = {userType: "NewUser", username: `${formData.username}`, password: `${formData.password}`, firstname: `${formData.firstname}`, lastname: `${formData.lastname}`, budgetdetails: [], budgetdetails: []}
      ):(
        headerObject = {userType: "ExistingUser", username: `${formData.username}`, password: `${formData.password}`}
      );

    //set up header for post request
    const header = {
      "input": headerObject,
      "stateMachineArn": stateMachine
    }

    //Make call to API gateway
    axios({
      method: 'post',
      url: proxyurl + APIEndpoint,
      data: header
    }).then(response => {
      console.log(response)
    }, err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      {/* Determine if user is logged in */}
      { (userLoggedIn === false) 
        ? <NoUserLoggedIn submitTriggered={userAccessRequestTriggered} />
        : <UserLoggedIn />
      }
    </div>
  );
}

export default App;
