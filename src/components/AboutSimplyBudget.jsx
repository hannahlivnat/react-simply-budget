import React from 'react';

function AboutSimplyBudget() {
  return (
    <div className="about-simply-budget">
      <h2>The Philosophy of Simple Budgeting</h2>
      <h4>Simplify and Destress</h4>
      <p>
      SimplyBudget simplifies and destresses the habit of monthly budgeting. Rather than breaking 
      finances down into minute categories, this app helps you track three main categories: your income,
      your flex expenses, and your firm expenses.
      </p>
      <div className="login-about-row">
        <div className="column-group">
          <h5>Income</h5>
          <p>
          Incoming money to your account. May include: paychecks, 
          interests from investments, gifts.
          </p>
        </div>
        <div className="column-group">  
          <h5>Firm Expenses</h5>
          <p>
          Stable expenses that have to be paid and which remain the same from 
          month to month. This may include your rent or mortgage, your health insurance,
          your phone bill. Think of these as your 'automated expenses'.
          </p>
        </div>
        <div className="column-group">
          <h5>Flex Expenses</h5>
          <p>
          Fluid expenses that you have more control over, even if they are necessary purchases 
          like groceries. This category encompasses any purchases that you make at a grocery store, 
          restaurant, Target, or yard sale.
          </p>
        </div>
      </div>
      <h4>Stay Flexible</h4>
      <p>
      By separating expenses into your steady monthly expenses and controllable monthly expenses, you can gain realistic insights 
      on what your monthly budget should look like while still retaining the flexibility realistic to your ever-changing life. 
      Welcome to more reasonable and stress-free budgeting!
      </p>
    </div>
  )
}

export default AboutSimplyBudget;