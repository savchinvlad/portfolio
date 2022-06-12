import React from 'react';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/vladislav-savchin-1ab334215/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/savchinvlad" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/savchinvlad" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}
