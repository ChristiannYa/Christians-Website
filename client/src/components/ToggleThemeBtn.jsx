import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { API_URL } from '../config/api';

const ToggleThemeBtn = ({ isDarkMode, toggleTheme }) => {
  useEffect(() => {
    fetch(`${API_URL}/theme`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.theme === 'dark' && !isDarkMode) {
          toggleTheme();
        }
      });
  }, [isDarkMode, toggleTheme]);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';

    fetch(`${API_URL}/theme`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme: newTheme }),
    });

    toggleTheme();
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        id="themeToggle"
        checked={isDarkMode}
        onChange={handleThemeToggle}
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
