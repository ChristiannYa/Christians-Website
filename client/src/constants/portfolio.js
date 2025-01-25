import { portfolio as portfolioImages } from '../assets/images';
import { skills } from '../assets/icons';

export const portfolio = [
  {
    id: 1,
    title: 'Bloom Bistro',
    category: 'Website',
    image: portfolioImages.bloomBistro,
    tools: [
      { id: 1, skill: 'PostgreSQL', icon: skills.psql },
      { id: 2, skill: 'Express', icon: skills.express },
      { id: 3, skill: 'React', icon: skills.react },
      { id: 4, skill: 'Node', icon: skills.node },
      { id: 5, skill: 'Sass', icon: skills.sass },
      { id: 6, skill: 'Tailwind', icon: skills.tw },
    ],
    desc: 'Full-Stack Restaurant website featuring dynamic routing for individual menu items, PostgreSQL database integration with Railway deployment, and secure admin authentication system to add, delete, and edit menu items.',
    link: 'https://bloom-bistro.netlify.app/',
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
      { id: 1, skill: 'Express', icon: skills.express },
      { id: 2, skill: 'React', icon: skills.react },
      { id: 3, skill: 'Sass', icon: skills.sass },
      { id: 4, skill: 'Tailwind', icon: skills.tw },
    ],
    desc: "Modern photography portfolio website. Features beautiful galleries, team member's profiles, and a contact system, built with React and Express.",
    link: 'https://taniagutti.com/',
  },
];
