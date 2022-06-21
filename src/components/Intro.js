import React from 'react';
import { Link } from 'react-router-dom';
import "./Intro.css";

export default function Intro() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-2">
          <h1>
            Purely made by Hands
            <br />
            Made with Love
          </h1>
          <p>
            online hub for the talented to show thier hand-made products
            <br />
            easy to buy .. easy to sell
          </p>
          <Link to='/about' className="btn">
            Explore Now &#8594;
          </Link>
        </div>
        <div className="col-2">
          <img src="assets/index-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}
