import React, { useState } from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";

const Hambuger = () => {
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
  div {
    color: green;
  }
`;

export default Hambuger;
