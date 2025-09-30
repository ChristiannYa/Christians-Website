import { useRef, useState, useCallback, useEffect } from "react";
import { portfolio } from "../constants/portfolio";
import { controls } from "../assets/icons";

const portfolioScrollable = "#portfolio-scrollable";

function calculateNewIndex(direction, currentIndex, totalItems) {
  if (direction === "right") {
    return currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
  } else {
    return currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
  }
}

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = useCallback(
    (direction) => {
      if (!containerRef.current) return;

      const itemWidth =
        containerRef.current.querySelector(portfolioScrollable).offsetWidth;
      const totalItems = portfolio.length;

      const newIndex = calculateNewIndex(direction, currentIndex, totalItems);

      containerRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      });
    },
    [currentIndex]
  );

  const handleScrollChange = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const itemWidth = container.querySelector(portfolioScrollable).offsetWidth;
    const scrollPosition = container.scrollLeft;

    const newIndex = Math.round(scrollPosition / itemWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, portfolio.length - 1));

    setCurrentIndex(clampedIndex);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Sync state with actual scroll position on mount
    const itemWidth = container.querySelector(portfolioScrollable)?.offsetWidth;
    if (itemWidth) {
      const initialIndex = Math.round(container.scrollLeft / itemWidth);
      setCurrentIndex(initialIndex);
    }

    container.addEventListener("scroll", handleScrollChange);
    return () => container.removeEventListener("scroll", handleScrollChange);
  }, [handleScrollChange]);

  return (
    <section
      id="portfolio"
      className="section md:flexcol-center max-md:min-h-fit max-md:pb-6"
    >
      <div className="section__child pt-10">
        <div className="flexcol gap-y-1">
          <h1 className="subheading">Portfolio</h1>
          <div className="porfolio relative">
            <aside className="portfolio__lengthInfo">
              <div className="bg-acc-1 rounded-xl px-2 py-1">
                <p className="text-white text-xs font-nunito">
                  {currentIndex + 1}/{portfolio.length}
                </p>
              </div>
            </aside>
            <div className="portfolio__items" ref={containerRef}>
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  id="portfolio-scrollable"
                  className="portfolio__items__item"
                >
                  <div className="flex-col mb-1">
                    <h2 className="title-lg">{item.title}</h2>
                  </div>
                  <div className="portfolio__items__preview">
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
                      <span key={tool.id} className="portfolio__items__skill">
                        {tool.skill}
                      </span>
                    ))}
                  </div>
                  <p className="paragraph">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="portfolio__ctrlBtns">
              <button
                onClick={() => handleScroll("left")}
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
                onClick={() => handleScroll("right")}
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
}

export default Portfolio;
