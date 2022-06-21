import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={classes.sidebar}>
      <div className={classes.list} id={showSidebar ? `${classes.hidden}` : ''}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">All products</Link>
      </div>

      <button
        className={classes.btn}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <MenuIcon />
      </button>
    </div>
  );
}
