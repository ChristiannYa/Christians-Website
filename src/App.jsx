import { useState } from "react";

import Nav from "./components/Nav";
import Intro from "./sections/Intro";
import Portfolio from './sections/Portfolio';
import WhatIDo from './sections/AboutMyWork';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Intro />
      <Portfolio />
      <WhatIDo />
    </>
  );
};