import { portfolio } from '../constants/portfolio';
import { icons } from '../assets/icons';

const Portfolio = () => {
  const portfolioContainer = (direction) => {
    const container = document.querySelector('.portfolio');
    const scrollDistance = 500;

    container.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  };

  return (
    <section id="portfolio" className="section md:flexcol">
      <div className="section__child pt-10">
        <div className="flexcol gap-y-4">
          <h1 className="text-preset-6">/Portfolio</h1>
          <div className="portfolio">
            {portfolio.map((item) => (
              <div key={item.id} className="portfolio__item">
                <div className="flex-col">
                  <h2 className="text-preset-3">{item.title}</h2>
                  <p className="text-preset-3-md">{item.category}</p>
                </div>
                <div className="portfolio__preview">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    className="flex-center"
                  >
                    <img src={item.image} className="" />
                  </a>
                </div>
                <div className="gap-1 flex w-fit">
                  {item.tools.map((tool) => (
                    <span
                      key={tool.id}
                      className={`portfolio__skill text-preset-5-md`}
                    >
                      {tool.skill}
                    </span>
                  ))}
                </div>
                <p className="text-preset-4">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full gap-x-4 min-[769px]:hidden">
            <button
              onClick={() => portfolioContainer('left')}
              className="bg-acc-1 text-white p-1 rounded-full w-8 h-8 flexcol-center"
            >
              <img src={icons.left.icon} alt="" width={18} height={18} />
            </button>
            <button
              onClick={() => portfolioContainer('right')}
              className="bg-acc-1 text-white p-1 rounded-full w-8 h-8 flexcol-center"
            >
              <img src={icons.right.icon} alt="" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
