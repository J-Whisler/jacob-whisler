import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navItemsAnim } from "../Shared/Animations";

const DesktopNav = ({ open }) => {
  return (
    <>
      <NavItems
        open={open}
        variants={navItemsAnim}
        initial="initial"
        animate="animate"
      >
        <li className="li-top">
          <Link className="link" to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="work" smooth={true} duration={1000}>
            Work
          </Link>
        </li>
        <li className="li-bottom">
          <Link className="link" to="contact" smooth={true} duration={1000}>
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
    /* width: 100vw; */
    justify-content: center;

    transform: ${({ open }) =>
      open ? "translateX(35vw)" : "translateX(100vw)"};
    z-index: 1000;
  }
`;

export default DesktopNav;
