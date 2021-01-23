import React from 'react';

import { Container } from './styledFooter';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <div className="footer-container">
          <div className="left-col">
            {/* <img src="img/logoteste.png" className="logo-footer" alt="" /> */}
            <div className="social-media">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <p className="rigths-text">&copy; 2021 Created By Wesley Rodrigues All Rigths Reserved.</p>
          </div>

          <div className="right-col">
            <h1>Novas Noticias</h1>
            <div className="border"></div>
            <p id="spancing">Entre com seu Email para novas noticias</p>
            <form action="" className="newletter-form">
              <input className="txtb" type="text" placeholder="Digite Seu Email" />
              <input className="btn-footer" type="submit" value="submit" />
            </form>

          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
