import React from "react";
import styled from "styled-components";

const DesktopNav = ({ open }) => {
  return (
    <NavItems open={open}>
      <li className="li-top">Home</li>
      <li>About</li>
      <li>Work</li>
      <li className="li-bottom">Contact</li>
    </NavItems>
  );
};

const NavItems = styled.div`
  list-style: none;
  /* border: 2px solid white; */
  position: absolute;
  top: 20rem;
  height: 20rem;
  width: 15rem;
  background: var(--secondary-background-color);
  li {
    border-top: 1px solid var(--tertiary-color);
    border-bottom: 1px solid var(--tertiary-color);
    color: white;
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
  }
`;

export default DesktopNav;
