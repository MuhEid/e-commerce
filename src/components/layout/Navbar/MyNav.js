import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Logo from '../../UI/Logo';
import classes from './MyNav.module.css';
import Sidebar from './Sidebar';


export default function MyNav() {
  const cxt = useContext(AuthContext)

  return (
    <div className={classes.navbar}>
      <div className={classes.leftside}>
        <Logo />
      </div>
      <div className={classes.rightside}>
        <Sidebar />
      </div>
    </div>
  );
}
