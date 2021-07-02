import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const buttonAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      // type: "linear",

      delay: 1.5,
    },
  },
};
const WorkButton = ({ children }) => {
  return (
    <WorkButtonContainer
      variants={buttonAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </WorkButtonContainer>
  );
};

const WorkButtonContainer = styled(motion.div)`
  background: var(--secondary-color);
  width: 12rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  left: 4rem;
  top: -0.5rem;

  a {
    color: var(--background-color);
    font-size: 1.5rem;
    font-family: var(--main-text);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    box-shadow: 0px 0px 10px var(--secondary-color);
    text-shadow: 0px 0px 5px var(--background-color);
  }
  @media (max-width: 768px) {
    left: 1rem;
  }
  @media (max-width: 415px) {
    left: -5rem;
    width: 6rem;
    a {
      font-size: 0.8rem;
    }
  }
`;

export default WorkButton;
