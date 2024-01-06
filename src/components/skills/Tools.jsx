import { useRef } from "react";
import "./skills.scss";
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

const Tools = () => {
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
        <br /><br />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#009F9D"}}>TOOLS</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <div className="title">
          <img style={{ marginTop: "70px", width: "170px", height: "170px" }} src="/gradle.svg" alt="" />
        </div>
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px", width: "220px", height: "200px" }} src="/postman.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px", width: "240px", height: "220px" }} src="/github_actions_cicd.png" alt="" />
        </motion.div>
        
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
            className="box"
          >
            <img style={{ marginTop: "140px", width: "250px", height: "80px" }} src="/JUnit.png" alt="" />
          </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px", width: "200px", height: "200px" }} src="/docker.png"/>
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px", width: "150px", height: "200px" }} src="/jenkins.svg" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Tools;
