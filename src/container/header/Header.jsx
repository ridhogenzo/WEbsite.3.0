import React from "react";
import People from "../../assets/images/people.png";
import AI from "../../assets/images/Header Illustration.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="gpt3_header section_padding">
      <div className="header_content">
        <h1 className="gradient_text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header_content_email">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started!</button>
        </div>
        <div className="header_content_people">
          <img src={People} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={AI} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
