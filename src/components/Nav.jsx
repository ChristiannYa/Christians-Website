import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { navLinks } from '../constants/navLinks';
import ToggleThemeBtn from './ToggleThemeBtn';

const Nav = ({ isDarkMode, toggleTheme }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState(null);

  const adjustPageSpacing = () => {
    const topnav = document.querySelector('.topnav');
    const topnavHeight = topnav.offsetHeight;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      if (window.innerWidth <= 768) {
        section.style.scrollMarginTop = `${topnavHeight - 18}px`;
      } else {
        section.style.scrollMarginTop = '0px';
      }
    });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    element.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: [0.2, 0.5, 0.8],
      rootMargin: '-20% 0px -20% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);  

  useEffect(() => {
    adjustPageSpacing();
    window.addEventListener('resize', adjustPageSpacing);

    return () => window.removeEventListener('resize', adjustPageSpacing);
  }, []);

  return (
    <header className="topnav">
      <div className="topnav__content">
        <ToggleThemeBtn isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <nav className="topnav__links flex-center gap-x-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
              className={`topnav__link ${
                activeSection === link.path.replace('#', '') ? 'active' : ''
              }`}
            >
              {windowWidth <= 768 ? (
                <img
                  src={
                    activeSection === link.path.replace('#', '') &&
                    link.icon.active
                      ? link.icon.active
                      : link.icon.hasTheme
                      ? isDarkMode
                        ? link.icon.light
                        : link.icon.dark
                      : link.icon.icon
                  }
                  alt={link.label}
                  className="w-8"
                />
              ) : (
                link.label
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

Nav.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Nav;
