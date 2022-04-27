import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section>
      <div className="footer">
        <div className="f1">
          <img src="" alt="logo"/>
          <p className="subf1"> We cook and deliver the tastier</p>
          <p className="subf1">food right away</p>
          <p className="subf1">designated location</p>
        </div>
        <div className="f2">
          <ul>
            <li><strong>About</strong></li>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Menu</li>
          </ul>
        </div>
        <div className="f2">
          <ul>
            <li><strong>Company</strong></li>
            <li>Why Burger King</li>
            <li>Partner with us</li>
            <li>FAQ</li>
            <li>Blog</li>
            </ul>
        </div>
        <div className="f2">
          <ul>
            <li><strong>Support</strong></li>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="f3">
         <h1><strong>Get in Touch</strong></h1>
          <p>Question or feedback</p>
          <p>We'd love to hear from you</p>
          <input type="text" placeholder="Emailaddress"/>
        </div>
      </div>

      </section>
    </>
  );
};

export default Footer;
