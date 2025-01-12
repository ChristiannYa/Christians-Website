import { portfolio as portfolioImages } from "../assets/images"

export const portfolio = [
  {
    id: 1,
    title: 'TG Photography',
    category: 'Website',
    image: portfolioImages.taniaPhotography,
    tools: [
      { id: 1, skill: 'React' },
      { id: 2, skill: 'Sass' },
      { id: 3, skill: 'Tailwind' },
      { id: 4, skill: 'Express' }
    ],
    desc: "Modern photography portfolio website. Features beautiful galleries, team member's profiles, and a contact system, built with React and Express",
    link: 'https://taniagutti.com/',
  },
  {
    id: 2,
    title: 'Bloom Bistro',
    category: 'Website',
    image: portfolioImages.bloomBistro,
    tools: [
      { id: 1, skill: 'React' },
      { id: 2, skill: 'Sass' },
      { id: 3, skill: 'Tailwind' },
      { id: 4, skill: 'Express' },
      { id: 5, skill: 'PostgreSQL' }
    ],
    desc: 'Restaurant website featuring menu categories filter, and advanced routing techniques for individual menu items, integrated with PostgreSQL for efficient data management.',
    link: 'https://github.com/dashboard',
  },
  {
    id: 3,
    title: 'Nike',
    category: 'Template',
    image: portfolioImages.nikeTemplate,
    tools: [
      { id: 1, skill: 'React' },
      { id: 2, skill: 'Sass' },
      { id: 3, skill: 'Tailwind' },
    ],
    desc: 'I developed this nike template with the guidance of Adrian from the "JavaScript Mastery" YouTube Channel for an introduction to Tailwind CSS',
    link: 'https://niketemplate.netlify.app/',
  }
]