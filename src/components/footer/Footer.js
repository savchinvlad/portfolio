import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Svchyn Vlad
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expierence">Expierence</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/savchinvlad">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/savchin_v">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/VladVla30743929">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>All rights reserved.</small>
      </div>
    </footer>
  );
}
