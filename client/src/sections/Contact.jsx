import PropTypes from 'prop-types';
import { useState } from 'react';

import { miscellaneous } from '../assets/icons';

const Contact = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    const email = document.querySelector('#email').textContent;

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div id="contact" className="section min-h-fit pt-14 pb-8 max-md:pt-20">
      <div className="section__child">
        <div className="screen800 componentBg p-4 rounded-lg">
          <h2 className="subheading-2 font-semibold">Like What You See?</h2>
          <p className="paragraph-xl">
            If you&apos;ve liked my work, and would like to reach for more
            information, you&apos;ll find my email below. I&apos;d love to hear
            about your ideas and how I can help you bring them to life.
          </p>
          <div className="flex items-center flex-wrap gap-x-2">
            <p id="email" className="paragraph-xl mt-1">
              chris.lopez.webdev@gmail.com
            </p>
            <button
              className="flex-center w-[17px] h-[17px] relative"
              onClick={handleCopy}
              aria-label="copy-email"
            >
              {!copied && (
                <img
                  src={
                    isDarkMode
                      ? miscellaneous.copy.light
                      : miscellaneous.copy.dark
                  }
                  alt="Copy email"
                  width={17}
                  height={17}
                />
              )}
              {copied && (
                <div className="inset-0 absolute">
                  <img
                    src={
                      isDarkMode
                        ? miscellaneous.checkMark.light
                        : miscellaneous.checkMark.dark
                    }
                    alt="Copied"
                    width={17}
                    height={17}
                  />
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-10 px-4 gap-1">
          <p className="paragraph-lg">
            ©{startYear}
            {currentYear > startYear && ` - ©${currentYear}`}
          </p>
          <p className="paragraph-lg">Chriswebdev</p>
          <p className="paragraph-lg">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;
