import React from "react";
import styled from "styled-components";

const Work = () => {
  return (
    <WorkContainer>
      <h3>Work</h3>
      <div className="work-content">
        <div className="content-left">
          <div className="content-left-item">
            <h4>Discover</h4>
          </div>
        </div>
        <div className="content-right"></div>
      </div>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  height: 100vh;
  z-index: 1000;
  position: relative;
  top: 80vh;
  background: var(--background-color);
  h3 {
    color: var(--tertiary-color);
    font-family: var(--main-text);
    font-size: 5rem;
    margin-left: 4rem;
    padding-top: 4rem;
    letter-spacing: 3rem;
    text-shadow: 0px 0px 10px var(--tertiary-color);
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  .work-content {
    /* border: 2px solid yellow; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    position: relative;
    width: 85%;
    top: -36rem;
    left: 15%;
    .content-left {
      /* border: 2px solid blue; */
    }
    .content-right {
      /* border: 2px solid green; */
    }
  }
  @media (max-width: 768px) {
    top: 164vh;
  }
`;

export default Work;
