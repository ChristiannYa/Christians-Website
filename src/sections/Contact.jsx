import PropTypes from 'prop-types';
import { useState } from 'react';

import { miscellaneous } from '../assets/icons';

const Contact = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const startYear = 2024; // Static start year
  const currentYear = new Date().getFullYear(); // Dynamic current year

  const handleCopy = () => {
    const email = document.querySelector('#email').textContent;

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div id="contact" className="section min-h-fit pt-5 pb-8">
      <div className="section__child">
        <div className="screen800 componentBg p-4 rounded-lg">
          <h2 className="subheading-2 font-semibold">Like What You See?</h2>
          <p className="paragraph-xl">
            If you&apos;ve enjoyed exploring my work and think we could build a
            great website together, feel free to reach out! I&apos;ve linked my
            email below.
            <br />
            I&apos;d love to hear about your ideas and how I can help bring them
            to life.
          </p>
          <div className="flex items-center gap-x-4">
            <p id="email" className="paragraph-xl-md mt-1">
              chris.lopez.webdev@gmail.com
            </p>
            <button
              className="flex-center w-6 h-6 relative"
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
                  className="wh-full"
                  width={18}
                  height={18}
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
                    className="wh-full"
                    width={18}
                    height={18}
                  />
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-8 px-4 gap-1">
          <p className="paragraph-lg">
            @{startYear}
            {currentYear > startYear && ` - @${currentYear}`}
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