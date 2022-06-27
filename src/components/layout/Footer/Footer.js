import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../UI/Logo';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footerDetails">
              <h3>Contact Details</h3>
              <p>Feel free to reach out to us in case of any queries.</p>
              <div className="contact-info">
                <img src="assets/icons8-phone-24.png" alt="" />
                <p>+20 1112 4058 07</p>
              </div>
            </div>

            <div className="footerLogo">
              <Logo />
            </div>

            <div className="footerLinks">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footerIcons">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <img src="assets/icons8-facebook-30.png" alt="" />
                </li>
                <li>
                  <img src="assets/icons8-instagram-30.png" alt="" />
                </li>
                <li>
                  <img src="assets/icons8-linkedin-30.png" alt="" />
                </li>
                <li>
                  <img src="assets/icons8-youtube-30.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">All rights reserved - Pure Hands 2022</p>
        </div>
      </div>
    </div>
  );
}
