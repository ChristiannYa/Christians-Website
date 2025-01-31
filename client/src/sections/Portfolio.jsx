import { useState } from 'react';

import { portfolio } from '../constants/portfolio';
import { controls } from '../assets/icons';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioContainer = (direction) => {
    const container = document.querySelector('.portfolio');
    const itemWidth = container.querySelector('.portfolio__item').offsetWidth;
    const totalItems = portfolio.length;

    let newIndex;
    if (direction === 'right') {
      newIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    }

    setCurrentIndex(newIndex);
    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: 'smooth',
    });
  };
  return (
    <section
      id="portfolio"
      className="section md:flexcol-center max-md:min-h-fit max-md:pb-6"
    >
      <div className="section__child pt-10">
        <div className="flexcol gap-y-1">
          <h1 className="subheading">Portfolio</h1>
          <div>
            <div className="portfolio">
              {portfolio.map((item) => (
                <div key={item.id} className="portfolio__item">
                  <div className="flex-col">
                    <h2 className="title-lg">{item.title}</h2>
                    <p className="title-lg-md -mt-1">{item.category}</p>
                  </div>
                  <div className="portfolio__preview">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener"
                      className="flex-center"
                    >
                      <img src={item.image} loading="lazy" />
                    </a>
                  </div>
                  <div className="gap-x-1 flex flex-wrap mt-1">
                    {item.tools.map((tool) => (
                      <span key={tool.id} className={`portfolio__skill`}>
                        {tool.skill}
                      </span>
                    ))}
                  </div>
                  <p className="paragraph">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex w-full mt-4 gap-x-4 min-[769px]:hidden">
              <button
                onClick={() => portfolioContainer('left')}
                className="portfolio__ctrlBtn"
              >
                <img src={controls.left.icon} alt="" width={18} height={18} />
              </button>

              <button
                onClick={() => portfolioContainer('right')}
                className="portfolio__ctrlBtn"
              >
                <img
                  src={controls.right.icon}
                  alt="Swipe"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
