import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../../images/Logo.png";
import Hamburger from "./Hamburger";

import { navAnim } from "../Shared/Animations";

const Navbar = () => {
  return (
    <StyledNav>
      <motion.div
        className="logo"
        variants={navAnim}
        initial="initial"
        animate="animate"
      >
        <img src={Logo} alt="logo" />
      </motion.div>
      <Hamburger />
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  /* border: 2px solid black; */
  height: 100vh;
  width: 15rem;
  display: flex;
  justify-content: center;
  background: var(--background-color);

  .logo {
    /* border: 2px solid white; */
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background: var(--secondary-background-color);
    img {
      height: 10rem;
      position: relative;
      top: 1rem;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    height: 12.1rem;
    width: 100%;
    z-index: 10000;
    border-bottom: 2px solid var(--tertiary-color);
    .logo {
      img {
        position: relative;
        left: -17rem;
      }
    }
  }
  @media (max-width: 415px) {
    position: fixed;
    /* height: 10rem;
    width: 100vw;
     z-index: 10000; 
    border-bottom: 2px solid var(--tertiary-color);
    overflow-x: hidden;  */
    .logo {
      img {
        position: relative;
        margin-right: -17rem;
        margin-top: 1rem;
        display: flex;
        height: 8rem;
      }
    }
  }
`;

export default Navbar;
