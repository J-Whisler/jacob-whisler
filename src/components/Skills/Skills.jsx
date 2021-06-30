import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "HTML",
    "CSS/SCSS",
    "Javascript",
    "React",
    "Figma/Photoshop",
    "Web Animations",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [80, 75, 65, 65, 50, 60],
      backgroundColor: ["rgba(70, 162, 159, 0.9)"],
    },
  ],
};

const options = {
  indexAxis: "x",
  responsive: true,
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h3>Skills</h3>
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  /* border: 2px solid green; */
  height: 80vh;
  width: 100%;
  /* overflow: none; */
  background: var(--secondary-background-color);
  position: absolute;
  /* top: 100vh; */
  z-index: 1000;
  /* overflow-x: hidden; */
  h3 {
    color: var(--tertiary-color);
    font-family: var(--main-text);
    font-size: 5rem;
    margin-left: 4rem;
    padding-top: 2rem;
    letter-spacing: 1.5rem;
    text-shadow: 0px 0px 10px var(--tertiary-color);
  }
  .chart {
    position: relative;
    left: 22rem;
    top: -1rem;
    /* height: 90%; */
    width: 60%;
    display: flex;
  }
  @media (max-width: 768px) {
    top: 100vh;
    h3 {
      padding-top: 5rem;
    }

    .chart {
      height: 80%;
      width: 80%;
      left: 5rem;
      top: 15%;
    }
  }
`;

export default Skills;
