import { useRef } from "react";
import "./skills.scss";
import { color, motion, useInView } from "framer-motion";

import styled from 'styled-components';

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

const Frameworks = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <FrameworksWrapper>
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
          <br />
          <br />
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <h1>
              <motion.b whileHover={{color:"#009F9D"}}>FRAMEWORKS, &nbsp;ARCHITECTURES &nbsp;&&nbsp; APIs</motion.b>
            </h1>
          </div>
        </motion.div>
        <motion.div className="card-list" variants={variants}>
            <img style={{ marginTop: "70px", width: "300px", height: "165px" }} src="/springboot.webp" alt="" />
            <img style={{ marginTop: "70px", width: "240px", height: "140px" }} src="/soaprest.png"/>
            <img style={{ marginTop: "70px", width: "250px", height: "120px" }} src="/eclipselink.png" alt="" />
            <img style={{ marginTop: "70px", width: "150px", height: "170px" }} src="/react.png" alt="" />
            <img style={{ marginTop: "70px", width: "210px", height: "210px" }} src="/microservices.png" alt="" />
            <img style={{ marginTop: "70px", width: "300px", height: "200px" }} src="/jms.png" alt="" />
        </motion.div>
      </motion.div>
    </FrameworksWrapper>
  );
};

export default Frameworks;

const FrameworksWrapper = styled.div`

      .card-list{
        justify-items: center;
        align-items: center;
        display: grid;
        gap: 40px;

        @media screen and (min-width: 7000px){
          grid-template-columns: repeat(2, 1fr); 
          align-items: stretch;
        }

        @media screen and (min-width: 900px){
          grid-template-columns: repeat(3, 1fr); 
          align-items: stretch;
        }
      
        @media screen and (min-width: 1200px){
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .img-container {
        justify-content: center;
      }

    `;