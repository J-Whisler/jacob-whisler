import React from "react";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <SocialContainer>
      <div className="social-items">
        <a
          href="https://twitter.com/JacobWhisler521"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/jacob_whisler/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/J-Whisler" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jacobwhisler/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="resume-button">
        <button>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      </div>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  /* border: 2px solid blue; */
  height: 5rem;
  width: 15rem;
  position: absolute;
  top: 21rem;
  .social-items {
    display: flex;
    justify-content: space-evenly;
    padding-top: 0.7rem;
    a {
      i {
        color: var(--secondary-color);
        font-size: 1.5rem;
        transition: all 0.3s linear;
        &:hover {
          transform: scale(1.1);
          text-shadow: 0px 0px 10px var(--secondary-color);
        }
      }
    }
  }

  .resume-button {
    /* border: 2px solid blue; */
    margin-top: 1.5rem;
    position: absolute;
    width: 15rem;
    text-align: center;

    button {
      background: var(--secondary-color);
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem;
      transition: all 0.3s linear;
      cursor: pointer;
      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--background-color);
        font-family: var(--main-text);
        font-weight: 700;
        letter-spacing: 0.3rem;
        transition: all 0.3s linear;
      }
    }
    &:hover {
      button {
        box-shadow: 0px 0px 20px var(--secondary-color);
        a {
          text-shadow: 0px 0px 3px var(--background-color);
        }
      }
    }
  }

  @media (max-width: 768px) {
    top: 34rem;
  }
`;

export default SocialLinks;
