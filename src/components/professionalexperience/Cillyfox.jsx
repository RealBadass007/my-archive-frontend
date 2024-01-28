import { useRef } from "react";
import "./professionalexp.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Oracle = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      style={{background: "linear-gradient(180deg, #0c0c1d, #0c0c1d)"}}
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
      <p>
          June 2021 - August 2021
          <br /> Mumbai, India
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img style={{objectFit : "cover"}}  src="/cillyfox.jpg" alt="" />
          <h1>
            <motion.b style={{color:"white"}} whileHover={{color:"white"}}>Cillyfox Inc.</motion.b>
          </h1>
        </div>
        <div className="title">
          <h2>
            <motion.b>Game Developer Intern</motion.b>
          </h2>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <div className="box">
        <div className="para-text">
          ● Developed 3 Mixed Reality (MR) mini-games from scratch in Unity Engine for MR Headsets and created dynamic game-logic and UI using C# and Javascript, built 3D models using Blender software<br/>
          ● Optimized internal gameplay mechanics and functionalities, enhancing the overall UX.<br/>
          ● Conducted rigorous testing to troubleshoot and resolve bugs related to user interactions.


        </div>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Oracle;
