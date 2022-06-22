import { useState } from 'react';
import './inputs.css';

const UserInput = (props) => {
  // Getting data

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
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="login__controls">
        <h2> Login </h2>

        <div className="new-expense__control">
          <label>email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={handleEmailChange}
          />
          {invalidEmail ? (
            <div>
              <p className="invalid">Email is invalid</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="new-expense__control">
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
          />
          {invalidPassword ? (
            <div>
              <p className="invalid">Password is invalid</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default UserInput;
