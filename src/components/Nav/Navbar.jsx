import React from "react";
import styled from "styled-components";

import Logo from "../../images/Logo.png";
import Hambuger from "./Hambuger";
const Navbar = () => {
  return (
    <StyledNav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Hambuger />
    </StyledNav>
  );
};

const StyledNav = styled.div`
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
`;

export default Navbar;
