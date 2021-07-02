import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navItemsAnim = {
  initial: {
    opacity: 0,
    // scale: 0,
  },
  animate: {
    opacity: 1,
    // scale: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
    },
  },
};

const DesktopNav = ({ open, handleClick }) => {
  return (
    <>
      <NavItems
        open={open}
        variants={navItemsAnim}
        initial="initial"
        animate="animate"
      >
        <li className="li-top">
          <Link
            className="link"
            to="about"
            smooth={true}
            duration={1000}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="skills"
            smooth={true}
            duration={1000}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="work"
            smooth={true}
            duration={1000}
            onClick={handleClick}
          >
            Work
          </Link>
        </li>
        <li className="li-bottom">
          <Link
            className="link"
            to="contact"
            smooth={true}
            duration={1000}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
        <SocialLinks />
      </NavItems>
    </>
  );
};

const NavItems = styled(motion.div)`
  list-style: none;
  /* border: 2px solid white; */
  position: absolute;
  top: 14rem;
  height: 20rem;
  width: 15rem;
  background: var(--secondary-background-color);
  transition: all 0.5s linear;
  z-index: 100;
  li {
    border-top: 1px solid var(--tertiary-color);
    border-bottom: 1px solid var(--tertiary-color);

    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &.li-top {
      border-top: 2px solid var(--tertiary-color);
    }
    &.li-bottom {
      border-bottom: 2px solid var(--tertiary-color);
    }
    a {
      color: var(--primary-color);
      text-decoration: none;
      font-family: var(--main-text);
      font-size: 1.2rem;
      letter-spacing: 0.4rem;
      /* text-shadow: 0px 0px 5px var(--primary-color); */
      transition: all 0.3s linear;
      &:hover {
        color: var(--secondary-color);
        text-shadow: 0px 0px 2px var(--secondary-color);
        transform: scale(1.1);
        /* font-size: 1.4rem; */
        /* font-weight: 700; */
      }
    }
    .link {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0rem;
    padding-top: 12rem;
    height: 75vh;
    justify-content: center;
    transform: ${({ open }) =>
      open ? "translateX(35vw)" : "translateX(100vw)"};
    z-index: 1000;
    border-bottom: 5px solid var(--tertiary-color);
  }

  @media (max-width: 415px) {
    transform: ${({ open }) =>
      open ? "translateX(21vw)" : "translateX(100vw)"};
    height: 95vh;
    border-bottom: 5px solid var(--tertiary-color);
  }
`;

export default DesktopNav;
