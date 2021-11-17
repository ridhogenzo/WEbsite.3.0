import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="footer_heading">
        <h1 className="gradient_text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer_button">
        <p>Request Early Access</p>
      </div>
      <div className="footer_links">
        <div className="footer_logo">
          <img src={Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer_content">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer_content">
          <h4>Company</h4>
          <p>Terms&Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer_content">
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer_copyrights">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
