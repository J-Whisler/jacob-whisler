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
          <h6 className="top">
            <a href="/">
              Back to top <i className="fas fa-arrow-up"></i>
            </a>
          </h6>
        </form>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 280vh;
  background: var(--secondary-background-color);
  h3 {
    color: var(--tertiary-color);
    font-family: var(--main-text);
    font-size: 5rem;
    margin-left: 4rem;
    padding-top: 4rem;
    letter-spacing: 3rem;
    text-shadow: 0px 0px 10px var(--tertiary-color);
  }
  .form-container {
    /* border: 2px solid blue; */
    width: 100vw;
    height: 75vh;
    margin-top: 25vh;
    /* margin-right: 30rem; */
    display: flex;
    position: relative;
    left: -20rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    .contact-form {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      margin-bottom: 6rem;
      input {
        width: 40rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-family: var(--main-text);
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid var(--background-color);
        background: rgba(0, 0, 0, 0.4);
        color: var(--primary-color);
        &:focus {
          border: 3px solid var(--secondary-color);
          outline: none;
        }
      }
      textarea {
        font-size: 1.5rem;
        font-family: var(--main-text);
        border-radius: 1rem;
        padding: 1rem;
        border: 2px solid var(--tertiary-color);

        margin-bottom: 1rem;
        background: rgba(0, 0, 0, 0.6);
        color: var(--primary-color);

        &:focus {
          border: 3px solid var(--secondary-color);
          outline: none;
        }
      }
      button {
        background: var(--secondary-color);
        outline: none;
        border: none;
        font-size: 1.5rem;
        letter-spacing: 1rem;
        display: flex;
        width: 25rem;
        justify-content: center;
        border-radius: 1rem;
        align-self: center;
        padding: 0.5rem 0;
        /* margin-bottom: 10rem; */
      }
      .top {
        /* border: 2px solid var(--background-color); */
        /* border-radius: 50%; */
        padding: 2rem 0.2rem;
        position: absolute;
        top: 29rem;
        left: -15rem;
        a {
          text-decoration: none;
          color: var(--tertiary-color);
          font-family: var(--main-text);
          font-size: 1.2rem;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    /* top: ; */
    h3 {
      letter-spacing: 0.5rem;
      transform: translateX(2.5rem);
      /* padding-left: 2rem; */
    }
    .form-container {
      margin-top: 10rem;
      .contact-form {
        /* border: 2px solid green; */
        margin-left: 3rem;
        input {
          width: 30rem;
        }
        .top {
          /* border: 2px solid blue; */
          left: 4rem;
          margin-top: 13rem;
          /* top: -1rem; */
        }
      }
    }
  }
`;

export default Contact;
