import PropTypes from "prop-types";
import { useRef } from "react";

import { skillsData } from "../constants/skills";
import SkillIcon from "../components/SkillIcon";
import { deliverItems } from "../constants/deliver";

const AboutMyWork = ({ isDarkMode }) => {
  const containerRef = useRef(null);

  return (
    <section
      id="whatIDo"
      className="section md:flexcol-center max-md:min-h-fit"
    >
      <div className="section__child pt-10">
        <h1 className="subheading">About My Work</h1>

        <div id="container" className="amw">
          <div className="amw__sectionOne">
            <div className="paragraph-lg pt-1 pb-4">
              <p>
                I specialize in developing <b>websites</b> and {" "}
                <b>Android applications</b> that balance aesthetics and user 
                experience. 
                I use technologies like <span className="font-[600]">VueJs</span> and {" "}
                <span className="font-[600]">Tailwind</span> for the interface,{" "}
                <span className="font-[600]">Kotlin</span> for backend or Android development, 
                and{" "} <span className="font-[600]">PostgreSQL</span> for database 
                management. 
                My development process is structured and user-focused, covering 
                each layer of your website/application, interface design, logic, and 
                backend, built to work together seamlessly
              </p>
            </div>

            <h3 className="paragraph-lg">
              Here is what I offer when creating your web-app:
            </h3>

            <ul className="uL-parent">
              {deliverItems.map((item) => (
                <li key={item.id} className="paragraph-md uL-child">
                  <img
                    src={isDarkMode ? item.iconLight : item.iconDark}
                    alt=""
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <aside className="amw__sectionTwo">
            <h3 className="paragraph-lg mb-3 text-center">
              <b>Skills</b>
            </h3>
            <div ref={containerRef} className="skillsContainer">
              {skillsData.map((skill, id) => (
                <SkillIcon key={id} skill={skill} isDarkMode={isDarkMode} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

AboutMyWork.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default AboutMyWork;
