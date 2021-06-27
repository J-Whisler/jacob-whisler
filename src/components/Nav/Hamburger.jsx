import React, { useState } from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>
      <DesktopNav open={open} />
    </>
  );
};

const StyledHamburger = styled.div`
  /* color: green; */
  /* border: 10px solid blue; */
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;

  z-index: 20;
  display: none;
  cursor: pointer;
  div {
    /* color: green; */
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    top: 4rem;
    right: 3rem;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? "var(--secondary-color)" : "var(--secondary-color)"};
    border-radius: 10px;

    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

export default Hamburger;
