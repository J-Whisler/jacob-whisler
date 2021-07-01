// import { motion } from "framer-motion";

export const pAnim = {
  initial: {
    // y: "-5vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // type: "spring",
      // stiffness: 120,
      duration: 2,
      delay: 0.5,
    },
  },
};

export const buttonAnim = {
  hidden: {
    opacity: 0,
    // y: "-3vh",
  },
  show: {
    opacity: 1,
    // y: "-3.5vh",
    transition: {
      duration: 1,
      // type: "tween",
      // stiffness: 150,
      delay: 3,
    },
  },
};

export const gifAnim = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 2,
      delay: 3,
      type: "spring",
      mass: 3,
      stiffness: 200,
    },
  },
};

export const navAnim = {
  initial: {
    opacity: 0,
    y: "-50vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const navItemsAnim = {
  initial: {
    opacity: 0,
    // y: "-50vh",
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

export const aboutTextAnim = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 2,
      duration: 2,
      delay: 4,
    },
  },
};
export const aboutBgAnim = {
  initial: {
    opacity: 0,
    // y: "-100vh",
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      // type: "spring",
      // stiffness: 150,
      duration: 1,
      delay: 3,
    },
  },
};

export const componentAnim = {
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
      // delay: 0.5,
      // type: "tween",
      // stiffness: 120,
      // mass: 2,
    },
  },
};

// export const componentTitleAnim = {
//   initial: {
//     opacity: 0,
//     x: "-10vw",
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 2,
//       delay: 0.5,
//     },
//   },
// };
