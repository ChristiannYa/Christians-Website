import { useRef, useState, useCallback } from 'react';
import { portfolio } from '../constants/portfolio';
import { controls } from '../assets/icons';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const calculateNewIndex = (direction, currentIndex, totalItems) => {
    if (direction === 'right') {
      return currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    } else {
      return currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    }
  };

  const handleScroll = useCallback(
    (direction) => {
      if (!containerRef.current) return;

      const itemWidth =
        containerRef.current.querySelector('.portfolio__item').offsetWidth;
      const totalItems = portfolio.length;

      const newIndex = calculateNewIndex(direction, currentIndex, totalItems);
      setCurrentIndex(newIndex);

      containerRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });
    },
    [currentIndex]
  );

  return (
    <section
      id="portfolio"
      className="section md:flexcol-center max-md:min-h-fit max-md:pb-6"
    >
      <div className="section__child pt-10">
        <div className="flexcol gap-y-1">
          <h1 className="subheading">Portfolio</h1>
          <div className="relative">
            <aside className="w-full flex justify-end items-center absolute top-0 right-0 min-[768px]:hidden">
              <div className="bg-acc-1 rounded-xl px-2 py-1">
                <p className="text-white text-xs font-nunito">
                  {currentIndex + 1}/{portfolio.length}
                </p>
              </div>
            </aside>
            <div className="portfolio" ref={containerRef}>
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
                      rel="noopener noreferrer"
                      className="flex-center"
                    >
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </a>
                  </div>
                  <div className="gap-x-1 flex flex-wrap mt-1">
                    {item.tools.map((tool) => (
                      <span key={tool.id} className="portfolio__skill">
                        {tool.skill}
                      </span>
                    ))}
                  </div>
                  <p className="paragraph">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex w-full mt-4 gap-x-4 min-[768px]:hidden">
              <button
                onClick={() => handleScroll('left')}
                className="portfolio__ctrlBtn"
                aria-label="Previous item"
              >
                <img
                  src={controls.left.icon}
                  alt="Previous"
                  width={18}
                  height={18}
                />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="portfolio__ctrlBtn"
                aria-label="Next item"
              >
                <img
                  src={controls.right.icon}
                  alt="Next"
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
