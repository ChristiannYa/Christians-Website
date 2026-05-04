import { christian } from "../assets/images";
import ScrollDownMouse from "../components/ScrollDownMouse";

const Intro = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("portfolio");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section md:flexcol-center max-md:pt-20 max-md:min-h-fit max-md:mb-24"
    >
      <div className="section__child flex max-md:flex-col max-md:space-y-6">
        <div>
          <h1 className="text-acc-1 font-robot text-4xl mb-1">
            Hi I am christian
          </h1>
          <div className="w-[400px] max-md:w-full flexcol gap-y-1">
            <div>
              <p className="paragraph-lg leading-none font-bold">
                Full-Stack Web & Android App Developer
              </p>
              <p className="paragraph opacity-80">Based in Houston, TX</p>
            </div>
            <div className="space-y-1">
              <p className="paragraph-lg">
                I build visually engaging websites and Android apps with a focus on 
                simplicity, elegance, and quality.
              </p>
              <p className="paragraph-lg">
                Outside of web-app development, you&apos;ll find me playing chess,
                watching movie or a TV show.
              </p>
            </div>
            <div className="overflow-hidden rounded-full w-[250px] aspect-square max-md:w-[200px] max-md:my-6 max-md:mx-auto mt-0.5">
              <img
                src={christian}
                alt="Christian photo"
                className="object-cover object-[0%_20%] wh-full"
              />
            </div>
          </div>
        </div>
        <div className="wh-full self-center justify-self-center">
          <ScrollDownMouse onClick={handleScrollDown} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
