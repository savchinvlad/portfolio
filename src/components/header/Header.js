import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/avatar1.jpg';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Savchyn Vlad</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scrool__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
