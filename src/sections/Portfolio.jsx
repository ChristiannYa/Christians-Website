import { portfolio } from '../constants/portfolio';

const Portfolio = () => {
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
                <div className='portfolio__preview'>
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
