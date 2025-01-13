import PropTypes from 'prop-types';

import { christian } from '../assets/images';

const Intro = () => {
  return (
    <section id="home" className="section md:flexcol-center max-md:pt-20">
      <div className="section__child md:flex">
        <div>
          <h1 className="text-acc-1 font-robot text-4xl mb-1">
            Hi I am christian
          </h1>
          <div className="w-[400px] max-md:w-full flexcol gap-y-2">
            <p className="text-preset-2">
              <b>Freelance Web Developer</b>.
            </p>
            <p className="text-preset-2">
              I believe that great a web design, starts with a focus on{' '}
              <b>simplicity</b> and <b>elegance</b>, ensuring that users can
              easily navigate and enjoy a smooth, and user-friendly experience.
            </p>
            <p className="text-preset-2">
              Outside of coding, I enjoy playing chess, which enhances my
              thinking and problem-solving skills.
            </p>
            <p className="text-preset-2">
              Preferred <b>tech</b> stack:
            </p>
            <div className="overflow-hidden rounded-full w-[250px] aspect-square max-sm:w-[200px] max-md:mx-auto">
              <img
                src={christian}
                alt="Christian photo"
                className="object-cover object-[0%_20%] wh-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Intro.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Intro;
