import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import MainBudgetPage from './MainBudgetPage';
import NewExpensePage from './NewExpensePage';
import NewBudgetPlan from './NewBudgetPlan';
import EditBudgetPlan from './EditBudgetPlan';
import Button from '@material-ui/core/Button';

function UserLoggedIn() {
  const [userHasBudgetPlan, doesUserHaveBudgetPlan] = useState(false);
  return (
    <div className="user-logged-in-container"> 
      <Router>
        <nav className="logged-in-nav">
          <div className="nav-wrapper">
            <h4 className="no-padding-or-margin brand-logo">
              <Link to="/">SimplyBudget</Link>
            </h4>
            <ul>
              <li>
                <Link to="/new-expense">New Expense/Income</Link>
              </li>
              <li>
              {
                (userHasBudgetPlan) 
                  ? <Link to="/edit-budget-plan">Edit Budget Plan</Link>
                  : <Link to="/new-budget-plan">New Budget Plan</Link>
              }
              </li>
              <Button>
                Logout
              </Button>
            </ul>
          </div>
        </nav>
      </Router>   
      <header>   

      </header> 
        <Switch>
          <Route path="/">
            <MainBudgetPage />
          </Route>
          <Route path="/new-expense">
            <NewExpensePage />
          </Route>
          <Route path="/new-budget-plan">
            <NewBudgetPlan />
          </Route>
          <Route path="/edit-budget-plan">
            <EditBudgetPlan />
          </Route>
        </Switch>
    </div>
  )
};

export default UserLoggedIn;