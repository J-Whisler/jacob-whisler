// import { motion } from "framer-motion";

export const pAnim = {
  initial: {
    // y: "-5vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1.5,
      delay: 1,
    },
  },
  exit: {
    // y: "-5vh",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const buttonAnim = {
  hidden: {
    opacity: 0,
    // y: "-3vh",
  },
  show: {
    opacity: 1,
    // y: "-3.5vh",
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 150,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const gifAnim = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 10,
      delay: 3,
      type: "spring",
      mass: 2,
      stiffness: 200,
    },
    exit: {
      opacity: 0,
      x: "10vw",
      transition: {
        duration: 1,
      },
    },
  },
};
