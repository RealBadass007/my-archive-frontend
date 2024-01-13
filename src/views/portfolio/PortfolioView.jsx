// import Test from "./Test";
// import "../../app.scss";
import "./portfolio.scss";
import Contact from "../../components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Chirag from "../../components/chirag/Chirag";
import Navbar from "../../components/navbar/Navbar";
import Parallax from "../../components/parallax/Parallax";
import Portfolio from "../../components/portfolio/Portfolio";
// import Services from "../../components/services/Services";
import Oracle from "../../components/professionalexperience/Oracle";
import Cillyfox from "../../components/professionalexperience/Cillyfox";
import Uinsports from "../../components/professionalexperience/Uinsports";
import Languages from "../../components/skills/Languages";

import styled from 'styled-components';
import Frameworks from "../../components/skills/Frameworks";
import Tools from "../../components/skills/Tools";
import Cloud from "../../components/skills/Cloud";
import Projects from "../../components/projects/Projects";

const PortfolioView = () => {
    return (
        <PortfolioViewWrapper>
            <div className='sc-details'>
                <section class="some-sections" id="Homepage">
                    <Chirag />
                </section>
                <section class="some-sections" id="Services">
                    <Parallax type="professionalexp" />
                </section>
                <section >
                    <Oracle />
                </section>
                <section class="some-sectionss" >
                    <Cillyfox />
                </section>
                <section class="some-sectionsss" >
                    <Uinsports />
                </section>
                <section class="some-sections" id="Services">
                    <Parallax type="skills" />
                </section>
                <section >
                    <Languages />
                </section>
                <section>
                    <Frameworks />
                </section>
                <section>
                    <Tools />
                </section>
                <section>
                    <Cloud />
                </section>
                <section class="some-sections" id="Portfolio">
                    <Parallax type="projects" />
                </section>
                <Projects />
                <section id="Contact" class="some-sections">
                    <Contact />
                </section>
                {/* Framer Motion Crash Course */}
                {/* <Test/>
                <Test/> */}
            </div>
        </PortfolioViewWrapper>
    );
}

export default PortfolioView;

const PortfolioViewWrapper = styled.div`


    .some-sections {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .some-sectionss {
        height: 90vh;
        width: 100vw;
    }

    .some-sectionsss {
        height: 80vh;
        width: 100vw;
    }

      .sc-games{
        min-height: 100vh;
        padding-top: 0px;
      }

      .sc-details{
        min-height: 100vh;
        padding-top: 65px;
        padding-bottom: 65px;
      }

    `;

// const PortfolioViewWrapper = styled.div`
//     section {
//         height: 100vh;
//         width: 100vw;
//         overflow: hidden;
//       }
// `;