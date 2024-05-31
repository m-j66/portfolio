import React from "react";
import "./contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f632b996-566f-41fa-a98c-751be6e19b0f");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

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
              <img src="/assets/logo-4.jpg" alt="Logo 1" />
              <p>+923475255870</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/logo-3.png" alt="Logo 2" />
              <p>mahnoor.junaid.19@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/logo-5.jpg" alt="Logo 3" />
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter Your email" name="email" />
          <label htmlFor="message">Description</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <label htmlFor="date">Date</label>
          <input type="date" placeholder="Enter Date" name="date" />
          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
