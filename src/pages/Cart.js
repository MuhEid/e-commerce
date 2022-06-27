import React, { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

// TODO: list down all cart items
// TODO: on checkout , check if logged in , if so go to payment , if not go to login page
// TODO: show the sum of the prices if possible

export default function Cart() {
  // const ctx = useContext(AuthContext); // this provides you with the log in info .. use it to route the user to payment if logged in or to log in if not

  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    localStorage.getItem('isLoggedIn') === '1'
      ? navigate('/payment')
      : navigate('/login');
  };

  return (
    <div>
      <button onClick={checkIfLoggedIn}>Chechout</button>
    </div>
  );
}
