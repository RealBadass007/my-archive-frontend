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
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
      <p>
          Januray 2021 - April 2021
          <br /> Quebec, Canada
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img style={{objectFit : "cover"}} src="/uinsports.png" alt="" />
          <h1>
            <motion.b style={{color:"rgb(295, 110, 17)"}}>UInsports Inc.</motion.b>
          </h1>
        </div>
        <div className="title">
          <h2>
            <motion.b>Graphic Designer Intern</motion.b>
          </h2>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <div className="box">
        <div className="para-text">
          ● Collaborated with the marketing team to conceptualize and create digital posts, graphics and art for all company platforms, 
          including social media, websites,email campaigns, resulting in a 40% increase in social media engagement<br/>
          ● Worked closely with company founders to ensure alignment with the brand identity, incorporating feedback to refine designs and 
          effectively manage time zone differences to deliver high-quality assets on time
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Oracle;
