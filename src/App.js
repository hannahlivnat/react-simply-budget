import React, { useState } from 'react';
import axios from 'axios';
import UserLoggedIn from './components/UserLoggedIn';
import NoUserLoggedIn from './components/NoUserLoggedIn';
import './css/App.css';

function App() {
  const [user, setUser] = useState({});
  const [userLoggedIn, isUserLoggedIn] = useState(false);

  const logInSuccess = () => {
    isUserLoggedIn(true);
  }

  // When new or existing user completes login/signup form, send data 
  // to api gateway that connects to user access step function
  const userAccessRequestTriggered = (newOrExisting, formData) => {
    console.log(newOrExisting, formData);
    //endpoint url
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const ExecuteAPIGateway = `https://${process.env.REACT_APP_API_ID}.execute-api.${process.env.REACT_APP_API_REGION}.amazonaws.com/${process.env.REACT_APP_PATH_VERSION}/execution`;
    const DescribeAPIGateway = `https://${process.env.REACT_APP_API_ID}.execute-api.${process.env.REACT_APP_API_REGION}.amazonaws.com/${process.env.REACT_APP_PATH_VERSION}/response`;
    let currentExecutionArn = '';
    const stateMachine = `${process.env.REACT_APP_USER_ACCESS_ARN}`
    let headerObject = {};
    let describedResponse = {};

    //set up input for signup or login
    (newOrExisting === "New User") 
      ? (
        headerObject = {userType: "NewUser", username: `${formData.username}`, password: `${formData.password}`, firstname: `${formData.firstname}`, lastname: `${formData.lastname}`, budgetdetails: [], budgetplan: []}
      ):(
        headerObject = {userType: "ExistingUser", username: `${formData.username}`, password: `${formData.password}`}
      );

    //set up header for post request
    const header = {
      "input": JSON.stringify(headerObject),
      "stateMachineArn": stateMachine
    }

    //Make call to API gateway
    axios({
      method: 'post',
      url: proxyurl + ExecuteAPIGateway,
      data: header
    }).then(response => {
      currentExecutionArn = response.data.executionArn;

      axios({
        method: 'post',
        url: proxyurl + DescribeAPIGateway,
        data: {"executionArn": currentExecutionArn}
      }).then(response => {
        describedResponse = JSON.parse(response.data.output);
        console.log(describedResponse);
        if (describedResponse.statusCode === 200) {
            logInSuccess();

            if (newOrExisting === 'New User') {
                setUser({
                  username: `${formData.username}`, 
                  firstname: `${formData.firstname}`, 
                  lastname: `${formData.lastname}`, 
                  budgetdetails: [], 
                  budgetplan: [] 
                })
            } else {
                setUser({
                  username: describedResponse.body.Item.username, 
                  firstname: describedResponse.body.Item.firstname, 
                  lastname: describedResponse.body.Item.lastname, 
                  budgetdetails: describedResponse.body.Item.budgetdetails, 
                  budgetplan: describedResponse.body.Item.budgetplan
                })
            }

        } else {
            console.log(describedResponse)
        }
      }, err => {
        console.log(err)
      })

      //(response.status === 200) 
      //  ? (
      //    isUserLoggedIn(true)
      //    (newOrExisting === "New User") 
      //      ? (
      //        setUser({username: `${formData.username}`, password: `${formData.password}`, firstname: `${formData.firstname}`, lastname: `${formData.lastname}`, budgetdetails: [], budgetplan: [] })
      //      ):(
      //        setUser({})
      //      )
      //  ):(
      //    console.log(response)
      //  );
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
