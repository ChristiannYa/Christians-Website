import { packages } from '../constants/packages';

const Packages = () => {
  return (
    <section id="packages" className="section">
      <div className="section__child pt-10">
        <div className="flexcol gap-y-4">
          <h1 className="text-preset-6">/Packages</h1>
          <div className="packages">
            {packages.map((pck) => (
              <div key={pck.id} className="packages__package">
                <div id={`${pck.title}-title`} className="packages__label">
                  <h2 className="packages__title">{pck.title}</h2>
                  <p className="packages__price">${pck.price}</p>
                </div>
                <div>
                  <div>
                    <h3 className="packages__subtitle">Includes: </h3>
                    <ul className="package_includes">
                      {pck.includes.map((sentence) => (
                        <li
                          key={sentence}
                          className="packages__include packages__text"
                        >
                          - {sentence}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-1">
                    <h3 className="packages__subtitle">Timeline:</h3>
                    <p className="packages__text">{pck.timeline}</p>
                  </div>
                  <div className="flex gap-1">
                    <h3 className="packages__subtitle">Extra page price:</h3>
                    <p className="packages__text">{pck.extraPagePrice}</p>
                  </div>
                  <p className="packages__text">{pck.revisions}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
