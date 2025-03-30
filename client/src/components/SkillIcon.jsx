import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const SkillIcon = ({ skill, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDevice, setIsMouseDevice] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsMouseDevice(mediaQuery.matches);

    const handleChange = (e) => setIsMouseDevice(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getIconSource = () => {
    if (isHovered && isMouseDevice) {
      return isDarkMode ? skill.lightHover : skill.darkHover;
    }
    return isDarkMode ? skill.light : skill.dark;
  };

  return (
    <img
      src={getIconSource()}
      alt={skill.name}
      className="w-[52px] h-[52px] max-[769px]:w-12 max-[769px]:h-12"
      width={18}
      height={18}
      onMouseEnter={() => isMouseDevice && setIsHovered(true)}
      onMouseLeave={() => isMouseDevice && setIsHovered(false)}
    />
  );
};

SkillIcon.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    dark: PropTypes.string,
    darkHover: PropTypes.string,
    light: PropTypes.string,
    lightHover: PropTypes.string,
  }).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default SkillIcon;
