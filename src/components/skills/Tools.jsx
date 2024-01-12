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

const Tools = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <ToolsWrapper>
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
              <motion.b whileHover={{color:"#009F9D"}}>TOOLS</motion.b>
            </h1>
          </div>
        </motion.div>
        <motion.div className="card-list" variants={variants}>
            <img style={{ marginTop: "70px", width: "170px", height: "170px" }} src="/gradle.svg" alt="" />
            <img style={{ marginTop: "70px", width: "220px", height: "200px" }} src="/postman.png" alt="" />
            <img style={{ marginTop: "70px", width: "240px", height: "220px" }} src="/github_actions_cicd.png" alt="" />
            <img style={{ marginTop: "140px", width: "250px", height: "80px" }} src="/JUnit.png" alt="" />
            <img style={{ marginTop: "70px", width: "200px", height: "200px" }} src="/docker.png"/>
            <img style={{ marginTop: "70px", width: "150px", height: "200px" }} src="/jenkins.svg" alt="" />
        </motion.div>
      </motion.div>
    </ToolsWrapper>
  );
};

export default Tools;

const ToolsWrapper = styled.div`

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