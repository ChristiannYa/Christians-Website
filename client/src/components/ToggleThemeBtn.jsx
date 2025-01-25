import PropTypes from 'prop-types';

const ToggleThemeBtn = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        id="themeToggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label className="switch-label" htmlFor="themeToggle">
        <span className="slider"></span>
      </label>
    </div>
  );
};

ToggleThemeBtn.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleThemeBtn;
