import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const componentAnim = {
  initial: {
    opacity: 0,
    // y: "100vh",
    // scale: 0,
  },
  animate: {
    opacity: 1,
    // y: 0,
    // scale: 1,
    transition: {
      duration: 3,
      delay: 3,
      // type: "tween",
      // stiffness: 120,
      // mass: 2,
    },
  },
};

const Skills = () => {
  const { ref, inView } = useInView();
  return (
    <SkillsContainer id="skills">
      <motion.h3
      // ref={ref}
      // variants={componentAnim}
      // initial="initial"
      // animate={inView ? "animate" : ""}

      // ref={ref}
      // variants={componentTitleAnim}
      // initial="initial"
      // animate={inView ? "animate" : ""}
      >
        Skills
      </motion.h3>
      <motion.div
        className="chart"
        ref={ref}
        variants={componentAnim}
        initial="initial"
        animate={inView ? "animate" : ""}
      >
        <Bar data={data} options={options} />
      </motion.div>
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

  @media (max-width: 415px) {
    h3 {
      font-size: 3.5rem;
    }
    .chart {
      left: 2.7rem;
    }
  }
`;

export default Skills;
