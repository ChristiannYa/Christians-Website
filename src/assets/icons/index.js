import gitHubDark from './github_dark-icon.svg';
import gitHubLight from './github_light-icon.svg';

import gmail from './gmail-icon.svg';

import homeLight from './home_light-icon.svg';
import homeDark from './home_dark-icon.svg';
import homeActive from './home_active-icon.svg';

import swipeLeft from './left-icon.svg';

import packagesDark from './packages_dark-icon.svg';
import packagesLight from './packages_light-icon.svg';
import packagesActive from './packages_active-icon.svg';

import portfolioDark from './portfolio_dark-icon.svg';
import portfolioLight from './portfolio_light-icon.svg';
import portfolioActive from './portfolio_active-icon.svg';

import swipeRight from './right-icon.svg';

import skillsDark from './skills_dark-icon.svg';
import skillsLight from './skills_light-icon.svg';

export const icons = {
  github: {
    light: gitHubLight,
    dark: gitHubDark,
    hasTheme: true,
  },
  gmail: { icon: gmail, hasTheme: false },
  home: {
    light: homeLight,
    dark: homeDark,
    hasTheme: true,
    active: homeActive,
  },
  left: { icon: swipeLeft, hasTheme: false },
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
  right: { icon: swipeRight, hasTheme: false },
  skills: {
    light: skillsLight,
    dark: skillsDark,
    hasTheme: true,
  },
};
