import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyNav.module.css';

export default function MyNav() {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <Link to='/'>
                <p className={classes.pure}>
                  Pure <span className={classes.hands} id="hands">Hands</span>
                </p>
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
      </div>
    </div>
  );
}
