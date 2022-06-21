import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Navbar/Logo';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Contact Details</h3>
              <p>Feel free to reach out to us in case of any queries.</p>
              <ul class="app-logo">
                <li>
                  <img src="assets/icons8-phone-24.png" alt="" />
                </li>
                <li>
                  <p>+2 011 124058 07</p>
                </li>
              </ul>
            </div>

            <div className="footerLogo">
              <Logo />
            </div>

            <div class="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col-4">
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
          <p class="copyright">All rights reserved - Pure Hands 2022</p>
        </div>
      </div>
    </div>
  );
}
