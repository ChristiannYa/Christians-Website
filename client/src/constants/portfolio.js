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
    desc: 'Full-Stack Restaurant website featuring dynamic routing for individual menu items, PostgreSQL database integration with Render deployment, and secure admin authentication system to add, delete, and edit menu items.',
    link: 'https://bloom-bistro.netlify.app/',
  },
  {
    id: 2,
    title: 'Haute Bridal Glam',
    category: 'Website',
    image: portfolioImages.hatebridalglam,
    tools: [
      { id: 1, skill: 'React', icon: skills.react },
      { id: 2, skill: 'Sass', icon: skills.sass },
      { id: 3, skill: 'Tailwind', icon: skills.tw },
      { id: 4, skill: 'Gsap', icon: skills.gsap },
    ],
    desc: 'Bridal makeup artist, serving weddings in Texas. Showcases clients services, expertise, packages, and a minimal animation for the landing page, in an elegant interface.',
    link: 'https://hautebridalglam.com/',
  },
  {
    id: 3,
    title: 'Prime Builders CPT',
    category: 'Website',
    image: portfolioImages.primeBuildersCPT,
    tools: [
      { id: 1, skill: 'Express', icon: skills.express },
      { id: 2, skill: 'React', icon: skills.react },
      { id: 3, skill: 'Sass', icon: skills.sass },
      { id: 4, skill: 'Tailwind', icon: skills.tw },
      { id: 5, skill: 'Gsap', icon: skills.gsap },
    ],
    desc: 'Professional construction website in Texas showcasing high-quality home building services. Designed with a clean, modern layout, bilingual accessibility, and a contact form built with Express.',
    link: 'https://primebuildersctp.netlify.app/',
  },
  {
    id: 4,
    title: 'TG Photography',
    category: 'Website',
    image: portfolioImages.taniaPhotography,
    tools: [
      { id: 1, skill: 'Express', icon: skills.express },
      { id: 2, skill: 'React', icon: skills.react },
      { id: 3, skill: 'Sass', icon: skills.sass },
      { id: 4, skill: 'Tailwind', icon: skills.tw },
    ],
    desc: "Modern photography portfolio website. Features beautiful galleries, team member's profiles, and a contact form, built with Express.",
    link: 'https://taniagutti.com/',
  },
];
