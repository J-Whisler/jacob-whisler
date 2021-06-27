import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
const DesktopNav = ({ open }) => {
  return (
    <>
      <NavItems open={open}>
        <li className="li-top">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li className="li-bottom">
          <a href="/">Contact</a>
        </li>
        <SocialLinks />
      </NavItems>
    </>
  );
};

const NavItems = styled.div`
  list-style: none;
  /* border: 2px solid white; */
  position: absolute;
  top: 14rem;
  height: 20rem;
  width: 15rem;
  background: var(--secondary-background-color);
  transition: all 0.5s linear;
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
  }
  @media (max-width: 768px) {
    /* overflow: hidden; */
    position: fixed;
    top: 0;
    /* right: 15rem; */
    padding-top: 12rem;
    height: 100vh;
    /* width: 50vw; */
    transform: ${({ open }) =>
      open ? "translateX(35vw)" : "translateX(100vw)"};
  }
`;

export default DesktopNav;
