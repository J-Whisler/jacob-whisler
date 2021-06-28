import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import WorkButton from "../shared/WorkButton";

const pAnim = {
  hidden: {
    opacity: 0,
    // y: "-3vh",
  },
  show: {
    opacity: 1,
    y: "-4.5vh",
    transition: {
      duration: 0.5,
      //   type: "spring",
      //   stiffness: 120,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <WorkContainer>
      <h3>Work</h3>
      <div className="work-content">
        <div className="content-left">
          <div
            className={
              activeTab === 1 ? "content-left-item active" : "content-left-item"
            }
            onClick={() => setActiveTab(1)}
          >
            <h4>
              Sunshine <i className="fas fa-sun"></i>
            </h4>
            <AnimatePresence>
              {activeTab === 1 && (
                <>
                  <motion.p
                    variants={pAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Sunshine is a weather app created using the{" "}
                    <a href="https://openweathermap.org/api">
                      Open Weather API
                    </a>
                    . This weather app gives users the date, current weather and
                    current weather conditions. View a gif of the project to the
                    right or click the button below to view the website!
                  </motion.p>
                  <WorkButton>See Sunshine!</WorkButton>
                </>
              )}
            </AnimatePresence>
          </div>
          <div
            className={
              activeTab === 2 ? "content-left-item active" : "content-left-item"
            }
            onClick={() => setActiveTab(2)}
          >
            <h4>
              Discover <i className="fas fa-route"></i>
            </h4>
            <AnimatePresence>
              {activeTab === 2 && (
                <>
                  <motion.p
                    variants={pAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Discover is a landing page that I created for a fake
                    Icelandic Travel company, inspired by my trip there in 2019!
                    View a gif of the project to the right or click the button
                    below to view the website!
                  </motion.p>
                  <WorkButton>See Discover!</WorkButton>
                </>
              )}
            </AnimatePresence>
          </div>
          <div
            className={
              activeTab === 3 ? "content-left-item active" : "content-left-item"
            }
            onClick={() => setActiveTab(3)}
          >
            <h4>
              Game <i className="fas fa-gamepad"></i>
            </h4>
            <AnimatePresence>
              {activeTab === 3 && (
                <>
                  <motion.p
                    variants={pAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Game Info
                  </motion.p>
                  <WorkButton>See Game!</WorkButton>
                </>
              )}
            </AnimatePresence>
          </div>
          <div
            className={
              activeTab === 4 ? "content-left-item active" : "content-left-item"
            }
            onClick={() => setActiveTab(4)}
          >
            <h4>
              Netflix <i className="fas fa-tv"></i>
            </h4>
            <AnimatePresence>
              {activeTab === 4 && (
                <>
                  <motion.p
                    variants={pAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Netflix! This a recreation of the popular Netflix landing
                    page. View a gif of the project to the right or click the
                    button below to view the website!
                  </motion.p>
                  <WorkButton>See Netflix!</WorkButton>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="content-right">
          {activeTab === 1 && (
            <motion.div
              variants={pAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/3WYiNa7vx0w19jGQKz"
                width="480"
                height="230"
                frameBorder="0"
                className="giphy-embed"
                title="sunshine"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/3WYiNa7vx0w19jGQKz">
                  via GIPHY
                </a>
              </p>
            </motion.div>
          )}
          {activeTab === 2 && (
            <motion.div
              variants={pAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/BC4xNxQop600BUt8YU"
                width="480"
                height="234"
                frameBorder="0"
                className="giphy-embed"
                title="discover"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/BC4xNxQop600BUt8YU">
                  via GIPHY
                </a>
              </p>
            </motion.div>
          )}
          {activeTab === 3 && (
            <motion.div
              variants={pAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/3WYiNa7vx0w19jGQKz"
                width="480"
                height="230"
                frameBorder="0"
                className="giphy-embed"
                title="game"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/3WYiNa7vx0w19jGQKz">
                  via GIPHY
                </a>
              </p>
            </motion.div>
          )}
          {activeTab === 4 && (
            <motion.div
              variants={pAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <iframe
                src="https://giphy.com/embed/oU4N9ODTfjLr0UeKQI"
                width="480"
                height="233"
                frameBorder="0"
                className="giphy-embed"
                title="netflix"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/oU4N9ODTfjLr0UeKQI">
                  via GIPHY
                </a>
              </p>
            </motion.div>
          )}
        </div>
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
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      padding-top: 4rem;
      .content-left-item {
        h4 {
          color: var(--primary-color);
          font-size: 3rem;
          font-family: var(--main-text);
          letter-spacing: 0.5rem;
          cursor: pointer;
          transition: all 0.3s linear;
          i {
            font-size: 1rem;
            position: absolute;
            margin-top: 0.5rem;
            color: var(--secondary-color);
            text-shadow: 0px 0px 5px var(--secondary-color);
          }
        }
        p {
          color: var(--tertiary-color);
          font-size: 1.4rem;
          line-height: 1.5rem;
          font-family: var(--main-text);
          a {
            text-decoration: none;
            color: var(--secondary-color);
            &:hover {
              opacity: 0.8;
            }
          }
        }
        &.active {
          h4 {
            transform: translateY(-2rem);
            text-decoration: underline;
          }
        }
      }
    }
    .content-right {
      /* border: 2px solid green; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      iframe {
        border-radius: 0.5rem;
      }
      p {
        transform: translateX(25rem);
        a {
          text-decoration: none;
          color: var(--secondary-color);
          text-shadow: 0px 0px 3px var(--secondary-color);

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    top: 164.4vh;
  }
`;

export default Work;
