import React from "react";
import "./contact.css";
const contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>
          <span>Con</span>tact Me
        </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in touch</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/assets/logo-4.jpg"></img>
              <p>+923475255870</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/logo-3.png"></img>
              <p>mahnoor.junaid.19@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/logo-5.jpg"></img>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name"></input>
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
          ></input>
          <label htmlFor="">Description</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <label htmlFor="">Date</label>
          <input type="date" placeholder="Enter Date" name="date"></input>
          <buttom className="contact-submit" type="submit">
            Submit Now{" "}
          </buttom>
        </form>
      </div>
    </div>
  );
};

export default contact;
