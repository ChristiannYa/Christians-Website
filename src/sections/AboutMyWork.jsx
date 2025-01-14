import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { skillsData } from '../constants/skills';
import SkillIcon from '../components/SkillIcon';
import { deliver } from '../assets/icons';

const AboutMyWork = ({ isDarkMode }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = containerRef.current.children;

    const ctx = gsap.context(() => {
      Array.from(icons).forEach((icon) => {
        // Random horizontal move
        const floatX = Math.random() * 10 + 2;

        // Random vertical
        const floatY = Math.random() * 10 + 2;

        // Random duration between 4-8 seconds
        const duration = Math.random() * 4 + 4;

        // Animate x and y positions in a continuous loop
        gsap.to(icon, {
          x: `+=${floatX}`,
          y: `+=${floatY}`,
          duration,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(icon, {
          x: `-=${floatX}`,
          y: `-=${floatY}`,
          duration,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: duration / 2,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="whatIDo" className="section">
      <div className="section__child">
        <h1 className="subheading">/About My Work</h1>

        <div id="container" className="amw">
          <div className="amw__sectionOne">
            <p className="text-preset-2 py-4">
              I focus on creating websites that are easy to navigate and
              visually engaging. My approch emphasizes a clean design and
              functionality, making sure that every project delivers a great
              user experience.
            </p>

            <h3 className="text-preset-2">I deliver:</h3>

            <ul className="uL-parent">
              <li className="paragraph-md uL-child">
                <img
                  src={isDarkMode ? deliver.layout.light : deliver.layout.dark}
                  alt=""
                />
                Designed responsive websites tailored to your needs.
              </li>
              <li className="paragraph-md uL-child">
                <img
                  src={
                    isDarkMode ? deliver.devices.light : deliver.devices.dark
                  }
                  alt=""
                />
                User-friendly layouts with a focus on simplicty and elegance.
              </li>
              <li className="paragraph-md uL-child">
                <img
                  src={
                    isDarkMode
                      ? deliver.intuitive.light
                      : deliver.intuitive.dark
                  }
                  alt=""
                />
                Websites that are functional, accessible, and intuitive for all
                users.
              </li>
              <li className="paragraph-md uL-child">
                <img
                  src={isDarkMode ? deliver.design.light : deliver.design.dark}
                  alt=""
                />
                Collabortaive designs that turn your ideas into a reality.
              </li>
            </ul>
          </div>

          <aside className="amw__sectionTwo">
            <h3 className="text-preset-2 mb-3 text-center">
              Favorite <b>Tech Stack</b>
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
