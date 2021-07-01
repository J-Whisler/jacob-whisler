import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bgWords from "../../images/bg-words.png";
import bgShapes from "../../images/bg-shapes.png";

import { aboutTextAnim, aboutBgAnim } from "../Shared/Animations";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const bgWordsEl = document.querySelectorAll(".bg-words");
  bgWordsEl.forEach((item) => {
    item.style.transform = `translateY(${offsetY * 1.2}px)`;
  });

  const bgShapesEl = document.querySelectorAll(".bg-shapes");
  bgShapesEl.forEach((item) => {
    item.style.transform = `translateY(${offsetY * 0.9}px)`;
  });

  const h3El = document.querySelectorAll(".h3");
  h3El.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.5}px)`;
  });

  const h5El = document.querySelectorAll(".h5");
  h5El.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.3}px)`;
  });

  const pEl = document.querySelectorAll(".p");
  pEl.forEach((item) => {
    item.style.transform = `translateY(${offsetY * -0.1}px)`;
  });

  // const [x, setX] = useState();
  // const [y, setY] = useState();
  // const [speed, setSpeed] = useState();

  document.addEventListener("mousemove", (e) => {
    const layerEl = document.querySelectorAll(".bg-img");
    layerEl.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      // console.log(x);
      item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });

  return (
    <AboutContainer id="about">
      <motion.img
        src={bgWords}
        alt="words background"
        className="bg-words bg-img"
        data-speed="2"
        variants={aboutBgAnim}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={bgShapes}
        alt="shapes background"
        className="bg-shapes"
        data-speed="-2"
        variants={aboutBgAnim}
        initial="initial"
        animate="animate"
      />

      <motion.div
        className="about-text"
        variants={aboutTextAnim}
        initial="initial"
        animate="animate"
      >
        <h3 className="h3">Hi! My name is Jacob.</h3>
        <h5 className="h5">I am a Front-End Web Developer</h5>
        <h5 className="h5 h5-bottom"> and Designer.</h5>
        <p className="p">Cleveland, OH</p>
      </motion.div>
    </AboutContainer>
  );
};

const AboutContainer = styled(motion.div)`
  /* border: 2px solid blue; */
  width: 84.17%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 15rem;
  background: var(--background-color);
  z-index: 500;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .about-text {
    position: absolute;
    top: 15rem;
    left: 5rem;
    color: var(--primary-color);
    font-family: var(--main-text);
    text-shadow: 0px 0px 3px var(--background-color);
    h3 {
      font-size: 4rem;
      letter-spacing: 0.2rem;
      margin-bottom: 2rem;
    }
    h5 {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
      &.h5-bottom {
        letter-spacing: 0.5rem;
      }
    }
    p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    top: 12rem;
    left: 0;
    width: 100%;
    height: 100vh;
    /* img {
      object-fit: contain;
    } */
    .about-text {
      /* border: 2px solid blue; */
      top: 15rem;
      left: 2.5rem;
      h3 {
        font-size: 3.2rem;
      }
      h5 {
        font-size: 2rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
  }
`;

export default About;
