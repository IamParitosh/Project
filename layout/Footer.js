import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Playstore</p>
        <p> IOS</p> 
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        

        <p>Copyrights 2021 &copy; Ecommerce</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.youtube.com/">Youtube</a>
        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;