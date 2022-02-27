import React from 'react'
import skin1 from "../assets/skin1.jpg";
import "../styles/Contact.css";


function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${skin1})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">First and Last Name</label>
          <input className='input2' name="name" placeholder="Enter Name" type="text" />
          <label htmlFor="email">Email Address</label>
          <input className='input2' name="email" placeholder="Enter Email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="7"
            placeholder="Send Us A Message!"
            name="message"
            required
          ></textarea>
          <button className='contact-button' type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;