import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { skillsData } from '../constants/skills';
import SkillIcon from '../components/SkillIcon';
import { deliverItems } from '../constants/deliver';

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
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="whatIDo"
      className="section md:flexcol-center max-md:min-h-fit"
    >
      <div className="section__child pt-10">
        <h1 className="subheading">About My Work</h1>

        <div id="container" className="amw">
          <div className="amw__sectionOne">
            <p className="paragraph-lg pt-1 pb-4">
              I specialize in making <b>websites</b> that balance asthetics and
              user experience. Using technologies like React combined with CSS
              and PotsgreSQL, I create <b>user-friendly interfaces</b> tailored
              to my client&apos;s needs. My process includes in-depth research,
              clean UI/UX design, and efficient coding pratices to ensure{' '}
              <b>performance and accessibility</b>.
            </p>

            <h3 className="paragraph-lg">
              Here is what I offer when creating your website:
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
