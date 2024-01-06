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

const Languages = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      style={{background: "linear-gradient(180deg, #16024d, #0c0c1d)"}}
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        <br />
          A blend of technical curiosity
          <br /> and creativity
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#009F9D"}}>LANGUAGES</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <div className="title">
          <img style={{ marginTop: "30px", width: "250px", height: "250px" }} src="/java.png" alt="" />
        </div>
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px", width: "170px", height: "190px" }} src="/plsql.png"/>
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "90px", width: "280px", height: "120px" }} src="/bash.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{marginTop: "40px", width: "200px", height: "200px" }} src="/xml.png" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <img style={{marginTop: "30px", width: "280px", height: "280px" }} src="/xslt.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{marginTop: "60px", width: "200px", height: "200px" }} src="/C.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{marginTop: "60px", width: "200px", height: "200px" }} src="/python.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{marginTop: "40px", width: "270px", height: "200px"}} src="/typescript.png" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Languages;
