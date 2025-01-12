import css from './css-icon.svg';

import gitHubDark from './github_dark-icon.svg';
import gitHubLight from './github_light-icon.svg';

import gmail from './gmail-icon.svg';

import homeLight from './home_light-icon.svg';
import homeDark from './home_dark-icon.svg';
import homeActive from './home_active-icon.svg';

import html from './html-icon.svg';
import javascript from './javascript-icon.svg';

import nodejsDark from './nodejs_dark-icon.svg';
import nodejsLight from './nodejs_light-icon.svg';

import openDark from './open_dark-icon.svg';
import openLight from './open_light-icon.svg';

import packagesDark from './packages_dark-icon.svg';
import packagesLight from './packages_light-icon.svg';
import packagesActive from './packages_active-icon.svg';

import portfolioDark from './portfolio_dark-icon.svg';
import portfolioLight from './portfolio_light-icon.svg';
import portfolioActive from './portfolio_active-icon.svg';

import postgresql from './postgresql-icon.svg';

import reactjs from './reactjs-icon.svg';
import sasscss from './sasscss-icon.svg';

import skillsDark from './skills_dark-icon.svg';
import skillsLight from './skills_light-icon.svg';

import tailwindDark from './tailwind_dark-icon.svg';
import tailwindLight from './tailwind_light-icon.svg';

export const icons = {
  css: { icon: css, hasTheme: false },
  github:{
    light: gitHubLight,
    dark: gitHubDark,
    hasTheme: true,
  },
  gmail: { icon: gmail, hasTheme: false, },
  home: {
    light: homeLight,
    dark: homeDark,
    hasTheme: true,
    active: homeActive,
  },
  html: { icon: html, hasTheme: false },
  javascript: { icon: javascript, hasTheme: false },
  nodejs: { 
    light: nodejsLight,
    dark: nodejsDark,
    hasTheme: true,
  },
  open: {
    light: openLight,
    dark: openDark,
    hasTheme: true,
  },
  packages: {
    light: packagesLight,
    dark: packagesDark,
    hasTheme: true,
    active: packagesActive,
  },
  portfolio: {
    light: portfolioLight,
    dark: portfolioDark,
    hasTheme: true,
    active: portfolioActive,
  }, 
  postgresql: { icon: postgresql, hasTheme: false },
  reactjs: { icon: reactjs, hasTheme: false },
  sasscss: { icon: sasscss, hasTheme: false },
  skills: {
    light: skillsLight,
    dark: skillsDark,
    hasTheme: true,
  },
  tailwind: { 
    light: tailwindLight,
    dark: tailwindDark,
    hasTheme: true,
  }
};
