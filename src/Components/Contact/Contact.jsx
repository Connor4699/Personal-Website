import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contact container" id="contact">
    <h3>Get in Touch</h3>
    <p>Feel free to reach out via email or connect with me on GitHub and LinkedIn:</p>
    <div className="contact-buttons">
      <a
        href="mailto:zhouconnor@gmail.com"
        className="contact-btn"
      >
        Email Me
      </a>
      <a
        href="https://github.com/Connor4699"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/connor-zhou-b1109030b/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        LinkedIn
      </a>
    </div>
  </div>
)

export default Contact
