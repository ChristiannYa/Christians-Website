import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Intro from "./sections/Intro";
import Portfolio from "./sections/Portfolio";
import WhatIDo from "./sections/AboutMyWork";
import Contact from "./sections/Contact";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state with system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="flexcol">
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Intro isDarkMode={isDarkMode} />
      <Portfolio />
      <WhatIDo isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}
