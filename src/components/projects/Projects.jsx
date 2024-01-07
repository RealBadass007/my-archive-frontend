import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import styled from 'styled-components';
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "MY ARCHIVE",
    img: "/myarchive_project.png",
    desc: "A digital personal archive built using Spring boot and React, where users can upload and maintain data related to games, movies, books, etc. Containerized the components using Docker and utilized Github Actions CI/CD workflow for seamless build and deployment on the AWS EC2 instance. Leveraged AWS RDS (PostgreSQL) database cloud service for scalable, secure, and efficient data retreival.",
    link: "/",
  },
  {
    id: 2,
    title: "Intoxication Detection App",
    img: "/d3app.png",
    desc: "A Software based solution to detect driver’s alcohol intoxication state, thus preventing DUI accidents. Detection algorithm comprises 3 neurocognitive tests which evaluates the user's reaction time & accuracy. The app also has a feature for sharing the current location to any of the user’s contacts using Whatsapp API. It consumes google maps API for booking a cab from the user’s current location to their saved plus code",
    link: "https://github.com/RealBadass007/myapp_3dapp",
  },
  {
    id: 3,
    title: "Chrome Dino: 3D MR Game",
    img: "/chrome_dino.png",
    desc: "A smartphone 3D Mixed Reality game inspired from the famous google chrome dino game. Leveraged Blender to design and model 3D environments, characters, and assets, ensuring high-quality visuals",
    link: "https://www.instagram.com/p/CSCWWYeDM6l/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <SingleWrapper>
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">See More</a>
            </div>
          </div>
        </div>
      </section>
    </SingleWrapper>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;

const SingleWrapper = styled.div`
    section {
        height: 100vh;
        width: 100vw;
      }
`;