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

const Cloud = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
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
            <motion.b whileHover={{color:"#009F9D"}}>CLOUD TECH</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <div className="title">
          <img style={{ marginTop: "70px", width: "150px", height: "220px" }} src="/aws_ec2.png" alt="" />
        </div>
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px",width: "150px", height: "220px" }} src="/aws_rds.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px",width: "150px", height: "200px" }} src="/aws_s3.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
        >
          <img style={{ marginTop: "70px",width: "150px", height: "200px" }} src="/aws_route53.png" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cloud;
