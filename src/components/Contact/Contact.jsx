import React from "react";
import styled from "styled-components";

const Contact = () => {
  return <ContactContainer>Contact</ContactContainer>;
};

const ContactContainer = styled.div`
  color: blue;
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 280vh;
  background: var(--secondary-background-color);
`;

export default Contact;
