import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jlxikxq",
        "template_2je9xtj",
        e.target,
        "user_vciSLxoFailuPgBKUaz3i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactContainer>
      <h3>Contact</h3>
      <div className="form-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" name="name" />
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" name="email" />
          <label htmlFor="subject"></label>
          <input type="text" placeholder="Subject" name="subject" />
          <label htmlFor="message"></label>
          <textarea
            rows="10"
            cols="30"
            placeholder="Please type your message"
          ></textarea>
          <button type="submit">
            <h5>Send</h5>
          </button>
        </form>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  color: blue;
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 280vh;
  background: var(--secondary-background-color);
`;

export default Contact;
