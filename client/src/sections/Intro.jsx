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
          <div className="w-[400px] max-md:w-full flexcol gap-y-2">
            <p className="paragraph-lg leading-none font-[600]">
              Full-Stack Web Developer
            </p>
            <p className="paragraph-lg">
              I build visually engaging websites, with a focus on simplicity and
              elegance. My goal is to ensure that users can easily navigate
              through a clean and well crafted site.
            </p>
            <p className="paragraph-lg">
              Outside of building websites, you&apos;ll find me playing chess or
              watching TV shows and movies.
            </p>
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
