import React from 'react';
import Logo from './Logo';
import classes from './MyNav.module.css';
import Sidebar from './Sidebar';


export default function MyNav() {
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
