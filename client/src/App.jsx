import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Intro from './sections/Intro';
import Portfolio from './sections/Portfolio';
import WhatIDo from './sections/AboutMyWork';
import Contact from './sections/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <div className="flexcol">
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Intro />
      <Portfolio />
      <WhatIDo isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}
