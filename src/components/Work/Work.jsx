import React, { useState } from "react";
import styled from "styled-components";
// import WorkButton from "../Shared/WorkButton";
import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";

const pAnim = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      // type: "spring",
      // stiffness: 120,
      duration: 1.5,
      delay: 0.5,
    },
  },
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
      delay: 1,
      // type: "tween",
      // stiffness: 120,
      // mass: 2,
    },
  },
};

const gifAnim = {
  initial: {
    opacity: 0,
    y: "10vh",
    // scale: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      // duration: 2,
      delay: 2,
      type: "spring",
      mass: 3,
      stiffness: 200,
    },
  },
};

const buttonAnim = {
  // hidden: {
  //   opacity: 0,
  //   scale: 0,
  // },
  // show: {
  //   opacity: 1,
  //   scale: 1,
  //   transition: {
  //     duration: 0.5,
  //     // type: "linear",

  //     delay: 3,
  //   },
  // },
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      // type: "spring",
      // stiffness: 120,
      duration: 1,
      delay: 3.5,
    },
  },
};

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <WorkContainer id="work">
      <motion.h3>Work</motion.h3>
      <motion.div className="work-content-container">
        <motion.div className="work-content-top">
          <motion.div
            className="work-content-top-headers"
            // variants={componentAnim}
            // ref={ref}
            // initial="initial"
            // animate={inView ? "animate" : ""}
          >
            <motion.h4
              className={activeProject === 1 ? "active" : ""}
              onClick={() => setActiveProject(1)}
            >
              Sunshine <i className="fas fa-sun"></i>
            </motion.h4>
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
              R.P.S. <i className="fas fa-gamepad"></i>
            </h4>
            <h4
              className={activeProject === 4 ? "active" : ""}
              onClick={() => setActiveProject(4)}
            >
              Netflix <i className="fas fa-tv"></i>
            </h4>
          </motion.div>
          <div className="work-content-info">
            {activeProject === 0 && (
              <motion.p
                className="base-p"
                ref={ref}
                variants={componentAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
              >
                Click one of the project headers to see a gif of the project as
                well as infomation about that project!
              </motion.p>
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
                <motion.div
                  className="work-button"
                  variants={buttonAnim}
                  initial="initial"
                  animate="animate"
                >
                  <a
                    href="https://weather-jw.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Sunshine!
                  </a>
                </motion.div>
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
                <motion.div
                  className="work-button"
                  variants={buttonAnim}
                  initial="initial"
                  animate="animate"
                >
                  <a
                    href="https://discover-isl.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Discover!
                  </a>
                </motion.div>
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
                    <span>R.P.S.</span> This is my take on the classic game
                    "Rock, Paper, Scissors". View a gif of the project or click
                    the button below to view the website!
                  </motion.p>
                </AnimatePresence>
                <motion.div
                  className="work-button"
                  variants={buttonAnim}
                  initial="initial"
                  animate="animate"
                >
                  <a
                    href="https://rock-paper-scissors-jw.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See R.P.S!
                  </a>
                </motion.div>
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
                <motion.div
                  className="work-button"
                  variants={buttonAnim}
                  initial="initial"
                  animate="animate"
                >
                  <a
                    href="https://netflix-by-jw.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Netflix!
                  </a>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
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
                  src="https://giphy.com/embed/OCR5FpTNg4iizSCWfG"
                  width="480"
                  height="230"
                  frameBorder="0"
                  title="rps"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/OCR5FpTNg4iizSCWfG">
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
      </motion.div>
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
        .work-button {
          background: var(--secondary-color);
          width: 12rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          padding: 0.5rem;
          transition: all 0.3s ease-in-out;
          position: relative;
          left: 4rem;
          top: -0.5rem;

          a {
            color: var(--background-color);
            font-size: 1.5rem;
            font-family: var(--main-text);
            text-decoration: none;
            transition: all 0.3s ease-in-out;
          }
          &:hover {
            box-shadow: 0px 0px 10px var(--secondary-color);
            text-shadow: 0px 0px 5px var(--background-color);
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
  @media (max-width: 768px) {
    top: 180vh;
    overflow-x: hidden;

    .work-content-container {
      /* border: 2px solid blue; */
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      width: 36rem;
      height: 100vh;
      left: 12rem;
      .work-content-top {
        /* border: 2px solid green; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 50vh;
        .work-content-top-headers {
          /* border: 2px solid purple; */
          display: grid;
          grid-template-rows: repeat(4, 1fr);
          height: 50vh;
          justify-content: left;
          margin-top: 2rem;
          h4 {
            /* border: 2px solid greenyellow; */
            font-size: 2.5rem;
            width: 15.5rem;
            transition: all 0.5s ease;
            &.active {
              transform: translateY(0) translateX(2rem);
            }
          }
        }

        .work-content-info {
          /* border: 2px solid cyan; */
          height: 50vh;
          display: flex;
          justify-content: center;

          .base-p,
          p {
            font-size: 1.6rem;
          }
        }
      }

      .work-content-bottom {
        /* border: 2px solid red; */
        height: 50vh;
        /* align-items: none; */
        .work-gif {
          position: relative;
          top: -3rem;
        }
      }
    }
  }

  @media (max-width: 415px) {
    h3 {
      margin-left: 2rem;
    }
    .work-content-container {
      width: 17.4rem;
      /* border: 2px solid white; */
      left: 8.5rem;
      .work-content-top {
        .work-content-top-headers {
          h4 {
            font-size: 1.8rem;
          }
        }
        .work-content-info {
          .base-p,
          p {
            font-size: 0.8em;
            margin-left: -4rem;
            margin-top: 6rem;
            width: 5rem;
            line-height: 1.2rem;
            /* display: none; */
          }
        }
      }
      .work-content-bottom {
        .work-gif {
          left: -3rem;
          top: 5rem;
          iframe {
            /* border-radius: 1rem; */
            width: 17rem;
          }
        }
      }
    }
  }
`;

export default Work;
