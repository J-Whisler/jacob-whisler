import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const buttonAnim = {
  hidden: {
    opacity: 0,
    // y: "-3vh",
  },
  show: {
    opacity: 1,
    y: "-3.5vh",
    transition: {
      duration: 0.5,
      //   type: "spring",
      //   stiffness: 120,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
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
      <a href="/">{children}</a>
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
`;

export default WorkButton;
