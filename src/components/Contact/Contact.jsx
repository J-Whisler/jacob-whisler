import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const componentAnim = {
  initial: {
    opacity: 0,
    // y: "100vh",
    // scale: 0,
  },
  animate: {
    opacity: 1,
    // y: 0,
    // scale: 1,
    transition: {
      duration: 3,
      delay: 1,
      // type: "tween",
      // stiffness: 120,
      // mass: 2,
    },
  },
};

const Contact = () => {
  const { ref, inView } = useInView();
  // console.log(inView);

  // const animation = useAnimation();
  // console.log(inView);

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: "spring",
  //         duration: 1,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: "-100vw",
  //     });
  //   }
  // }, [inView]);

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
    <ContactContainer id="contact">
      <h3>Contact</h3>
      <motion.div
        className="form-container"
        ref={ref}
        variants={componentAnim}
        initial="initial"
        animate={inView ? "animate" : ""}
      >
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
            <Link to="about" smooth={true} duration={1000} className="link">
              Back to top <i className="fas fa-arrow-up"></i>
            </Link>
          </h6>
        </form>
      </motion.div>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
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
    letter-spacing: 1.5rem;
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
    left: -15rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* overflow: hidden; */
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
        cursor: pointer;
        transition: 0.3s ease-in-out;
        h5 {
          color: var(--background-color);
          transition: 0.3s ease-in-out;
        }
        &:hover {
          box-shadow: 0px 0px 10px var(--secondary-color);
          text-shadow: 0px 0px 3px var(--background-color);
        }
      }
      .top {
        /* border: 2px solid var(--background-color); */
        /* border-radius: 50%; */
        padding: 2rem 0.2rem;
        position: absolute;
        top: -7rem;
        left: 52rem;
        .link {
          cursor: pointer;
        }
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
      /* transform: translateX(-1rem); */
      /* padding-left: 2rem; */
    }
    .form-container {
      margin-top: 10rem;
      .contact-form {
        /* border: 2px solid green; */
        margin-left: -4rem;
        input {
          width: 30rem;
        }
        .top {
          /* border: 2px solid blue; */
          left: 20rem;
          margin-top: 1rem;
          /* top: -1rem; */
        }
      }
    }
  }

  @media (max-width: 415px) {
    h3 {
      font-size: 4rem;
      margin-top: -3rem;
    }
    .form-container {
      .contact-form {
        margin-top: -1rem;
        input,
        textarea,
        button {
          width: 20rem;
        }
        .top {
          left: 1rem;
          top: 29rem;
          padding-bottom: 2rem;
        }
      }
    }
  }
`;

export default Contact;
