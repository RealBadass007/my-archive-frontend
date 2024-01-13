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
            August 2022 - Present
            <br /> Mumbai, India
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img style={{objectFit : "cover"}} src="/oracle.jpg" alt="" />
            <h1>
              <motion.b style={{color:"crimson"}} whileHover={{color:"crimson"}}>Oracle Financial Services Software</motion.b>
            </h1>
          </div>
          <div className="title">
            <h2>
              <motion.b>Associate Consultant (Backend Developer)</motion.b>
            </h2>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <div className="para-text">
            ● Planned, designed and executed the development of core Business Logic and robust, highly scalable RESTful
            APIs for more than 25+ new features, in a fast paced, high-intensity work environment <br/>
            ● Identified and resolved 10+ critical bugs, 3 within the production environment, ensuring system stability and
            minimizing disruptions<br/>
            ● Actively contributed to 3 concurrent projects over a four-month period and ensured timely delivery of all
            components with minimal technical debt<br/>
            ● Implemented automation for starting over 45 mock servers daily, thus resulting in an efficiency gain of 93.3%<br/>
            ● Represented my department at a client location and played a pivotal role in the seamless installation of the
            banking application and subsequent build deployments on application servers and web servers<br/>
            ● Conducted on-site integration of multiple modules post the initial development cycle<br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
        </motion.div>
      </motion.div>
  );
};

export default Oracle;
