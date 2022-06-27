import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.css';

export default function Login(props) {
  // Getting data

  //TODO: adding a routing to the on submit function to the home page
  const navigate = useNavigate();

  /**
   // * Important: the Context that holds the isloggedIn; false should be called on the cart page 
   // * because the function that checks if he is logged in or not is related to the checkout button 
   // * after checking the localstorage for the logged in info .. the cxt wil be routed using routing history back to the payment page. 
   */

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  // Validation
  // invalid Check

  const [invalidEmail, setInvalidEmail] = useState(true);
  const [invalidPassword, setInvalidPassword] = useState(true);

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
    if (
      /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(
        e.target.value
      )
    ) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
    if (e.target.value.length >= 6) {
      setInvalidPassword(false);
    } else {
      setInvalidPassword(true);
    }
  };

  // handling submitting the data

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      email: enteredEmail,
      password: enteredPassword, 
    };

    // validation before submission
    if (!invalidEmail && !invalidPassword) {
      props.onSaveData(inputData);
      setEnteredEmail('');
      setEnteredPassword('');
    }

    // TODO put the routing to home here
    navigate('/');
  };

  return (
    <form onSubmit={submitHandler} className="container">
      <div className={classes.login__controls}>
        <h2> Login </h2>

        <div className={classes.login__control}>
          <label>email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={handleEmailChange}
          />
          {invalidEmail ? (
            <div>
              <p className={classes.invalid}>Email is invalid</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.login__control}>
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
          />
          {invalidPassword ? (
            <div>
              <p className={classes.invalid}>Password is invalid</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={classes.login__actions}>
        <button className="btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
