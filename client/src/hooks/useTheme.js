import { useState, useCallback, useEffect, useRef } from 'react';
import { API_URL } from '../config/api';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const initialLoadRef = useRef(true);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      const themeValue = newTheme ? 'dark' : 'light';

      localStorage.setItem('theme', themeValue);
      fetch(`${API_URL}/theme`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: themeValue }),
      });

      return newTheme;
    });
  }, []);

  useEffect(() => {
    if (initialLoadRef.current) {
      const syncServerTheme = async () => {
        const response = await fetch(`${API_URL}/theme`, {
          credentials: 'include',
        });
        const data = await response.json();
        const serverTheme = data.theme === 'dark';

        if (serverTheme !== isDarkMode) {
          setIsDarkMode(serverTheme);
          localStorage.setItem('theme', data.theme);
        }
      };

      syncServerTheme();
      initialLoadRef.current = false;
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};
