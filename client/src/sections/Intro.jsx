import { christian } from '../assets/images';
import ScrollDownMouse from '../components/ScrollDownMouse';

const Intro = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('portfolio');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="section md:flexcol-center max-md:pt-20 max-md:min-h-fit max-md:mb-24"
    >
      <div className="section__child md:flex">
        <div>
          <h1 className="text-acc-1 font-robot text-4xl mb-1">
            Hi I am christian
          </h1>
          <div className="w-[400px] max-md:w-full flexcol gap-y-2">
            <p className="paragraph-lg">
              <b>Front End Web Developer</b>.
            </p>
            <p className="paragraph-lg">
              I build visually engaging websites, with a focus on{' '}
              <b>simplicity</b> and <b>elegance</b>. My goal is to ensure that
              users can easily navigate and enjoy a smooth experience.
            </p>
            <p className="paragraph-lg">
              Outside of building websites, you&apos;ll find me playing chess,
              or watching tv movies/shows.
            </p>
            <div className="overflow-hidden rounded-full w-[250px] aspect-square max-md:w-[200px] max-md:my-6 max-md:mx-auto">
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