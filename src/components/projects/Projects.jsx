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
    desc: "A personal digital archive where users can upload and maintain content related to games, movies etc. Containerized the Spring Boot and React applications using Docker and utilized Github Actions CI/CD pipeline for seamless build and deployment on the cloud AWS EC2 instance. Leveraged AWS RDS (PostgreSQL) database cloud service for scalable, secure, and efficient data retreival. Registered and hosted my domain on AWS cloud using Route53.",
    link: "/",
  },
  {
    id: 2,
    title: "Intoxication Detection App",
    img: "/d3app.png",
    desc: "Developed using the Flutter framework, this mobile app employs a series of 3 neurocognitive tests to assess the user's reaction time and accuracy for determining their intoxication state. Implemented a robust authentication and registration system using Firebase, ensuring a streamlined and secure user journey. Leverages Google Maps’ geolocation APIs & Whatsapp APIs to facilitate location sharing to contacts and location-based cab booking.",
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