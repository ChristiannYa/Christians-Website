import PropTypes from 'prop-types';
import { skills } from '../constants/skills';

const Skills = ({ isDarkMode }) => {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <img
          src={
            skill.icon.hasTheme
              ? isDarkMode
                ? skill.icon.light
                : skill.icon.dark
              : skill.icon.icon
          }
          alt=''
          key={skill.id}
          width={18}
          height={18}
          className="skills__icon w-6 aspect-square"
        />
      ))}
    </div>
  );
};

Skills.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Skills;
