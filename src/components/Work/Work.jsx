import React, { useState } from "react";
import styled from "styled-components";
import WorkButton from "../Shared/WorkButton";
import { motion, AnimatePresence } from "framer-motion";

import { pAnim, gifAnim } from "../Shared/Animations";

const Work2 = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <WorkContainer>
      <h3>Work</h3>
      <div className="work-content-container">
        <div className="work-content-top">
          <div className="work-content-top-headers">
            <h4
              className={activeProject === 1 ? "active" : ""}
              onClick={() => setActiveProject(1)}
            >
              Sunshine <i className="fas fa-sun"></i>
            </h4>
            <h4
              className={activeProject === 2 ? "active" : ""}
              onClick={() => setActiveProject(2)}
            >
              Discover <i className="fas fa-route"></i>
            </h4>
            <h4
              className={activeProject === 3 ? "active" : ""}
              onClick={() => setActiveProject(3)}
            >
              Game <i className="fas fa-gamepad"></i>
            </h4>
            <h4
              className={activeProject === 4 ? "active" : ""}
              onClick={() => setActiveProject(4)}
            >
              Netflix <i className="fas fa-tv"></i>
            </h4>
          </div>
          <div className="work-content-info">
            {activeProject === 0 && (
              <p className="base-p">
                Click one of the headers above to see a gif of the project as
                well as infomation about that project!
              </p>
            )}
            {activeProject === 1 && (
              <>
                <AnimatePresence>
                  <motion.p
                    variants={pAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>Sunshine</span> is a weather app created using the{" "}
                    <a href="https://openweathermap.org/api">
                      Open Weather API
                    </a>
                    . This weather app gives users the date, current weather and
                    current weather conditions. View a gif of the project or
                    click the button below to view the website!
                  </motion.p>
                </AnimatePresence>
                <WorkButton className="work-button">
                  <a href="/">See Sunshine!</a>
                </WorkButton>
              </>
            )}

            {activeProject === 2 && (
              <>
                <AnimatePresence>
                  <motion.p
                    variants={pAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>Discover</span> is a landing page that I created for a
                    fake Icelandic Travel company, inspired by my trip there in
                    2019! View a gif of the project or click the button below to
                    view the website!
                  </motion.p>
                </AnimatePresence>
                <WorkButton>
                  <a href="/">See Discover!</a>
                </WorkButton>
              </>
            )}

            {activeProject === 3 && (
              <>
                <AnimatePresence>
                  <motion.p
                    variants={pAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>Game</span> Info
                  </motion.p>
                </AnimatePresence>
                <WorkButton>
                  <a href="/">See Game!</a>
                </WorkButton>
              </>
            )}

            {activeProject === 4 && (
              <>
                <AnimatePresence>
                  <motion.p
                    variants={pAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>Netflix!</span> This a recreation of the popular
                    Netflix landing page. View a gif of the project or click the
                    button below to view the website!
                  </motion.p>
                </AnimatePresence>
                <WorkButton>
                  <a href="/">See Netflix!</a>
                </WorkButton>
              </>
            )}
          </div>
        </div>
        <div className="work-content-bottom">
          {activeProject === 1 && (
            <AnimatePresence>
              <motion.div
                className="work-gif"
                variants={gifAnim}
                initial="initial"
                animate="animate"
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
            </AnimatePresence>
          )}
          {activeProject === 2 && (
            <AnimatePresence>
              <motion.div
                className="work-gif"
                variants={gifAnim}
                initial="initial"
                animate="animate"
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
            </AnimatePresence>
          )}

          {activeProject === 3 && (
            <AnimatePresence>
              <motion.div
                className="work-gif"
                variants={gifAnim}
                initial="initial"
                animate="animate"
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
            </AnimatePresence>
          )}
          {activeProject === 4 && (
            <AnimatePresence>
              <motion.div
                className="work-gif"
                variants={gifAnim}
                initial="initial"
                animate="animate"
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
            </AnimatePresence>
          )}
        </div>
      </div>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  /* border: 2px solid blue; */
  height: 100vh;
  /* width: 80%; */
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
  .work-content-container {
    /* border: 2px solid green; */
    position: absolute;
    top: 0;
    left: 14rem;
    height: 100vh;
    width: 80.9rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    .work-content-top {
      /* border: 2px solid blue; */
      /* padding-top: 5rem; */
      display: grid;
      grid-template-rows: repeat(2, 1fr);

      .work-content-top-headers {
        /* border: 2px solid red; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        h4 {
          color: var(--primary-color);
          font-family: var(--main-text);
          font-size: 3rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          i {
            color: var(--secondary-color);
            position: relative;
            font-size: 1.3rem;
            top: -1rem;
            left: -0.5rem;
          }
          &.active {
            text-decoration: underline;
            transform: translateY(-2rem);
            text-shadow: 2px 2px 2px var(--secondary-color);
            i {
              text-shadow: 1px 1px 1px var(--primary-color);
            }
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .work-content-info {
        /* border: 2px solid yellow; */
        display: flex;
        flex-direction: column;
        /* padding-top: -0.5rem; */
        /* .work-content-info-item {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
        } */
        .base-p {
          width: 80%;
          margin: auto;
          font-size: 3rem;
          opacity: 0.5;
          position: relative;
          top: 3rem;
        }
        p {
          color: var(--primary-color);
          font-family: var(--main-text);
          font-size: 1.8rem;
          width: 90%;
          margin: 0 auto 1.5rem auto;
          /* position: relative; */
          /* top: -1.2rem; */
          span {
            color: var(--secondary-color);
          }
          a {
            text-decoration: none;
            color: var(--secondary-color);
          }
        }
      }
    }
    .work-content-bottom {
      /* border: 2px solid white; */
      display: flex;
      justify-content: center;
      align-items: center;
      .work-gif {
        iframe {
          border-radius: 1rem;
        }
        p {
          transform: translateX(24rem);
          a {
            text-decoration: none;
            color: var(--secondary-color);
            font-size: 1.2rem;
            text-shadow: 2px 2px 3px var(--secondary-color);
            transition: all 0.3s ease-in-out;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
`;

export default Work2;