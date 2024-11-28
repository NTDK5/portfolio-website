import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact</h2>
          <p>
            Let's connect and embark on a collaborative journey towards turning
            your ideas into reality. I am eager to hear about your project and
            explore how we can work together to create a remarkable digital
            presence. Reach out to me using the contact details below, and let's
            start a conversation.
          </p>
        </div>
        <div className="form">
          <form>
            <div className="row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" required />
              </div>
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
