import React from "react";

const SoundSection = () => {
  const handleLearMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Increíble resistencia.</h2>
          <p className="text"> Color en su esencia.</p>
          <span className="description">
            El nuevo e innovador diseño cuenta con una parte posterior de vidrio
            con infusión de color en todo el material. Y gracias a que el vidrio
            pasa por un proceso de intercambio iónico dual personalizado y a la
            carcasa de aluminio de calidad aeroespacial, el iPhone 15 tiene una
            resistencia increíble.
          </span>
          <ul className="links">
            <li>
              <a className="link" onClick={handleLearMore}>
                Mas información
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
