import { portfolio as portfolioImages } from '../assets/images';
import { skills } from '../assets/icons';

export const portfolio = [
  {
    id: 1,
    title: 'Bloom Bistro',
    category: 'Website',
    image: portfolioImages.bloomBistro,
    tools: [
      { id: 1, skill: 'React', icon: skills.react },
      { id: 2, skill: 'Sass', icon: skills.sass },
      { id: 3, skill: 'Tailwind', icon: skills.tw },
      { id: 4, skill: 'Express', icon: skills.express },
      { id: 5, skill: 'PostgreSQL', icon: skills.psql },
    ],
    desc: 'Under development - Restaurant website featuring menu categories filter, and advanced routing techniques for individual menu items, integrated with PostgreSQL for efficient data management.',
    link: 'https://www.postgresql.org/',
  },
  {
    id: 2,
    title: 'Nike',
    category: 'Template',
    image: portfolioImages.nikeTemplate,
    tools: [
      { id: 1, skill: 'React', icon: skills.react },
      { id: 2, skill: 'Sass', icon: skills.sass },
      { id: 3, skill: 'Tailwind', icon: skills.tw },
    ],
    desc: 'I developed this nike template with the guidance of Adrian from the "JavaScript Mastery" YouTube Channel for an introduction to Tailwind CSS. Plus, I added a simple navigation menu, and simple animations.',
    link: 'https://niketemplate.netlify.app/',
  },
  {
    id: 3,
    title: 'TG Photography',
    category: 'Website',
    image: portfolioImages.taniaPhotography,
    tools: [
      { id: 1, skill: 'React', icon: skills.react },
      { id: 2, skill: 'Sass', icon: skills.sass },
      { id: 3, skill: 'Tailwind', icon: skills.tw },
      { id: 4, skill: 'Express', icon: skills.express },
    ],
    desc: "Modern photography portfolio website. Features beautiful galleries, team member's profiles, and a contact system, built with React and Express.",
    link: 'https://taniagutti.com/',
  },
];
