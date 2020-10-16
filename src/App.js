import React, { useState } from 'react';
import UserLoggedIn from './components/UserLoggedIn';
import NoUserLoggedIn from './components/NoUserLoggedIn';
import './css/App.css';

function App() {
  const [user, setUser] = useState({});
  const [userLoggedIn, isUserLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* Determine if user is logged in */}
      { (userLoggedIn === false) 
        ? <NoUserLoggedIn />
        : <UserLoggedIn />
      }
    </div>
  );
}

export default App;
